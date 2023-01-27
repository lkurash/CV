class Slider{
  constructor(){
    this.active = 0;
    this.img = '';
    this.link = '';
    this.sliderItem = document.querySelectorAll('.item');
    this.sliderNameProject = document.querySelectorAll('.link-my-project');
    this.wrapper = document.getElementById('wrapper');
  }

  removeActiveImg(element){
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove("active");
      element[i].classList.remove("activLink");
    }
  }

  changePosition(img, li){
    const position = -500;
    const translateValue = "translate3d(" + position + ", 0px, 0)";

    this.wrapper.style.transform = translateValue;
    img.classList.remove("notactive");
    img.classList.add("active");
    li.classList.add("activLink");
  }

  initialValue(){
    this.sliderItem[this.active].classList.remove("notactive");
    this.sliderItem[this.active].classList.add("active");
    this.sliderNameProject[this.active].classList.add("activLink");
  }

  left(){
    if (this.active > 0) {
      this.removeActiveImg(this.sliderItem);
      this.removeActiveImg(this.sliderNameProject);
      --this.active;
      this.img = this.sliderItem[this.active];
      this.link = this.sliderNameProject[this.active];
      this.changePosition(this.img,this.link);
    }
  }

  right(){
    if (this.active <= 2) {
      this.removeActiveImg(this.sliderItem);
      this.removeActiveImg(this.sliderNameProject);
      ++this.active;
      this.sliderItem[this.active - 1].classList.add("notactive");
      this.img = this.sliderItem[this.active];
      this.link = this.sliderNameProject[this.active];
      this.changePosition(this.img, this.link);
    }
  }

  activeItem(active){
    this.active = active;
  }

  showLinks(e){
    this.sliderNameProject.forEach(element=>{
      element.classList.remove("activLink");
      this.sliderNameProject[e.target.id].classList.add("activLink");
    });
  }

  showImg(e){
    this.sliderItem.forEach((element)=>{
      element.classList.remove("active");
      element.classList.add("notactive");
      this.sliderItem[e.target.id].classList.remove("notactive");
      this.sliderItem[e.target.id].classList.add("active");
    });
  }
}
const viewSlider = new Slider();

viewSlider.initialValue();
export default viewSlider;
