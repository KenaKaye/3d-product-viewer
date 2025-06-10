import { initScene } from './initScene.js';
import { createSpaceship } from './createSpaceship.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { animate } from './animationLoop.js';

const { scene, camera, renderer, controls } = initScene();

const spaceship = createSpaceship();
scene.add(spaceship);

addLighting(scene);

const interaction = setupInteraction(camera, scene, renderer);

animate(renderer, scene, camera, controls, interaction);
