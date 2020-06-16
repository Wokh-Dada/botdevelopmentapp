import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-product-presentation-img',
  styleUrl: 's-abdullakh-product-presentation-img.css',
  shadow: false,
})
export class SAbdullakhProductPresentationImg implements ComponentInterface {
  /**
   * массив для вывода url img в компоненете ProductPresentationImg
   * */
  @Prop() img: any;

  /**
   * клик по элементам подкомпонента ProductPresentationImg компонента ProductPresentation
   * */
  @Event() clickOnProductPresentation: EventEmitter;

  render() {
    return (
      <div
        class="presentationImg"
        style={{backgroundImage: "url(" + this.img.imgUrl + ")"}}
        onClick={() => this.clickOnProductPresentation.emit(this.img)}>
        <IconBlock arr={this.img.icon} />
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов ProductPresentationTitle
 */
const IconBlock = (props) => {
  return props.arr.map((item) => {
    return (
      <div class={iconClass(item.id)} style={{backgroundImage: "url("+ item.img +")"}}>

      </div>
    );
  })
}

/*
* функция для присваивания класса бутстрап
 */
function iconClass(x) {
  switch (x) {
    case 'whatsApp':
      return 'whats  animate__animated animate__pulse';

    case 'telegram':
      return 'telega';

    case 'viber':
      return 'vider';

    case 'mes':
      return 'messgs';

    case 'vk':
      return 'vk';
  }
}
