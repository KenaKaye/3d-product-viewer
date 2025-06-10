// Global variables for interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let intersectedObject = null;
let autoRotate = true;
const infoPanel = document.getElementById('info-panel');

// Set up mouse event listeners
function setupInteractions() {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onMouseClick);
    document.addEventListener('mousedown', () => { autoRotate = false; });
    document.addEventListener('mouseup', () => { setTimeout(() => { autoRotate = true; }, 2000); });
}

// Handle mouse movement for hover effects
function onMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(spaceshipGroup.children, true);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (obj !== intersectedObject) {
            if (intersectedObject) {
                intersectedObject.scale.set(1, 1, 1);
            }
            intersectedObject = obj;
            obj.scale.set(1.1, 1.1, 1.1);
        }
    } else {
        if (intersectedObject) {
            intersectedObject.scale.set(1, 1, 1);
            intersectedObject = null;
            infoPanel.style.display = 'none';
        }
    }
}

// Handle mouse clicks for part selection
function onMouseClick() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(spaceshipGroup.children, true);

    if (intersects.length > 0) {
        const obj = intersects[0].object;
        infoPanel.textContent = obj.userData.name || 'Unknown Part';
        infoPanel.style.display = 'inline';
        obj.scale.set(1.2, 1.2, 1.2);
        setTimeout(() => obj.scale.set(1, 1, 1), 200);
    }
}