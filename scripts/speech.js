class StageManager {
  constructor(node) {
    this.theater = node;
    // Managing a node and its children is StageManager's purpose.
    // StageManager makes and ends child nodes but doesn't handle them further.
    // Build no feature into SM that cannot be handled better by another object
    // The goal is to never ever break SM or the entire script dies.
    // SM does take on all logical tasks for SM (meta-handling of a node)
    this.theater.addEventListener('click', click => this.clicker(click));
    // On one hand: Might be splittable?
    // OTOH: better to have a closer EventListener to .stopPropagation?
    // Unsure which is more optimized, pretty sure single EventListener
  }

  clicker(click) {
    click.preventDefault();
    if (click.target !== click.currentTarget) {
     let clickedItem = click.target.id;
     alert(console.log(clickedItem));
   } else {};
    click.stopPropagation();
  }

} // StageManager

const Director = new StageManager(document.getElementById('theater'));
// Limits the global space's exposure to my dirty hands.
