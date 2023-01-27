class Menu{
  constructor(){
    this.selectedItemMenu = document.querySelectorAll(".select-topic");

    this.checkSelectedItemMenu();
  }

  showMenu(){
    if (document.getElementById('menu').style.display === "block") {
      document.getElementById('menu').style.display = "none";
    }
    else{
      document.getElementById('menu').style.display = "block";
    }
  }

  checkSelectedItemMenu(){
    for (let index = 0; index < this.selectedItemMenu.length; index++) {
      this.selectedItemMenu[index].addEventListener("click", function (e) {
        if (e.target.id) {
          let topic = e.target.id;

          viewMenu.showList(topic);
        }
        else {
          console.log("unchecked");
        }
      });

    }
  }

  showList(topic){
    if (topic === 'choose-work') {
      this.showItemInlist('#work', 'block');
      this.showItemInlist('#me', 'none');
    }
    if (topic === 'choose-me') {
      this.showItemInlist('#work', 'none');
      this.showItemInlist('#me', 'block');
    }
    if (topic === 'choose-all') {
      const list = document.querySelectorAll('.list-item-facts');

      list.forEach(element => {
        element.style.display = "block";
      });
    }
  }

  showItemInlist(id, display){
    const list = document.querySelectorAll(id);

    list.forEach(element => {
      element.style.display = display;
    });
  }
}

const viewMenu = new Menu();

export default viewMenu;
