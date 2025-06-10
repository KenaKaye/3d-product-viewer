export function animate(renderer, scene, camera, controls, interaction) {
  function render() {
    requestAnimationFrame(render);
    interaction.checkIntersection();
    controls.update();
    renderer.render(scene, camera);
  }
  render();
}
