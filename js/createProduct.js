// Global variable for spaceship group
let spaceshipGroup;

// Create spaceship using basic geometries
function createSpaceship() {
    spaceshipGroup = new THREE.Group();

    // Main Body (elongated cone)
    const bodyGeometry = new THREE.ConeGeometry(1.2, 7, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.4 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI / 2;
    body.position.set(0, 0, 0);
    body.userData = { name: 'Fuselage' };
    spaceshipGroup.add(body);

    // Cockpit (flattened sphere)
    const cockpitGeometry = new THREE.SphereGeometry(0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const cockpitMaterial = new THREE.MeshStandardMaterial({ color: 0x00aaff, metalness: 0.9, roughness: 0.3, transparent: true, opacity: 0.8 });
    const cockpit = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpit.position.set(0, 0.6, 3);
    cockpit.userData = { name: 'Cockpit Canopy' };
    spaceshipGroup.add(cockpit);

    // Wings (delta wings)
    const wingGeometry = new THREE.BoxGeometry(5, 0.3, 2.5);
    const wingMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, metalness: 0.7, roughness: 0.5 });
    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-2.5, 0, 0);
    leftWing.rotation.z = Math.PI / 6;
    leftWing.userData = { name: 'Left Wing' };
    spaceshipGroup.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(2.5, 0, 0);
    rightWing.rotation.z = -Math.PI / 6;
    rightWing.userData = { name: 'Right Wing' };
    spaceshipGroup.add(rightWing);

    // Engines (cylinders)
    const engineGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    const engineMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500, metalness: 0.7, roughness: 0.5 });
    const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    leftEngine.position.set(-1, 0, -3.5);
    leftEngine.userData = { name: 'Left Engine' };
    spaceshipGroup.add(leftEngine);

    const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    rightEngine.position.set(1, 0, -3.5);
    rightEngine.userData = { name: 'Right Engine' };
    spaceshipGroup.add(rightEngine);

    // Navigation Beacon
    const beaconGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const beaconMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 1 });
    const beacon = new THREE.Mesh(beaconGeometry, beaconMaterial);
    beacon.position.set(0, 1.2, 1);
    beacon.userData = { name: 'Navigation Beacon' };
    spaceshipGroup.add(beacon);

    // Antenna
    const antennaGeometry = new THREE.ConeGeometry(0.15, 1.2, 16);
    const antennaMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.8, roughness: 0.3 });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.set(0, 1.5, 0);
    antenna.rotation.x = Math.PI;
    antenna.userData = { name: 'Communication Antenna' };
    spaceshipGroup.add(antenna);

    // Add spaceship to scene
    scene.add(spaceshipGroup);
}