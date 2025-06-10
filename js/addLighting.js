// Add lights to the scene
function addLighting() {
    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    // Directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Point light near spaceship
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 20);
    pointLight.position.set(0, 3, 3);
    scene.add(pointLight);

    // Spot light for focused illumination
    const spotLight = new THREE.SpotLight(0xffffff, 0.7);
    spotLight.position.set(0, 10, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.2;
    scene.add(spotLight);
}