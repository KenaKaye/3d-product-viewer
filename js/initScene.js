// Global variables for scene components
let scene, camera, renderer, controls;

// Initialize scene, camera, renderer, and controls
function initScene() {
    // Create scene with dark background
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    // Set up perspective camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 8); // Close enough to see spaceship
    camera.lookAt(0, 0, 0); // Focus on origin

    // Initialize WebGL renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x111111, 1);
    document.body.appendChild(renderer.domElement);

    // Set up OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0;
    controls.target.set(0, 0, 0);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Add starfield and debug cube
    addStarfield();
    addDebugCube();
}

// Resize handler to update camera and renderer
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Add starfield background
function addStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200;
        positions[i + 1] = (Math.random() - 0.5) * 200;
        positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
}

// Add debug cube to confirm rendering
function addDebugCube() {
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff00ff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    scene.add(cube);
}