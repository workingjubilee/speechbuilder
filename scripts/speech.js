class StageManager {
  constructor(node) {
    this.theater = node;
    console.log(this.theater);
    this.theater.addEventListener('click', click => this.clicker(click));
    console.log(this.theater);
  }

  clicker(click) {
    alert("Hoi!");

    if (click.target !== click.currentTarget) {
     let clickedItem = click.target.id;
     alert("Hello " + clickedItem);
   } else {};

    click.stopPropagation();
  }

}
// class Narrator

const Stager = new StageManager(document.getElementById('theater'));
