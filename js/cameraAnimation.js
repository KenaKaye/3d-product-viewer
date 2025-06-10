// Animation clock
let clock = new THREE.Clock();

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Floating animation for spaceship
    if (spaceshipGroup) {
        spaceshipGroup.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }

    // Beacon pulsing effect
    const beacon = spaceshipGroup.children.find(child => child.userData.name === 'Navigation Beacon');
    if (beacon) {
        beacon.material.emissiveIntensity = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.5;
    }

    // Update camera controls if auto-rotating
    if (autoRotate) {
        controls.update();
    }

    // Render the scene
    renderer.render(scene, camera);
}