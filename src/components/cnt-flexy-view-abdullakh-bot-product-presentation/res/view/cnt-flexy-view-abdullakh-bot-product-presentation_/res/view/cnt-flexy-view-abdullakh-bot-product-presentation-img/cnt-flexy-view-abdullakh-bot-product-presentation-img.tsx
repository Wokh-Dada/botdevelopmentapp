import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-presentation-img',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-presentation-img.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotProductPresentationImg implements ComponentInterface {
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
      <div class="presentationImg"
        id="presentationImg"
        style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.img.imgUrl + ")"}}
        onClick={() => this.clickOnProductPresentation.emit(this.img)}
      >
        <IconBlock arr={this.img.icon}/>
      </div>
    );
  }
}

/*
* компонентная функция для вывода картинок-иконок в product-presentation-img
 */
const IconBlock = (props) => {
  return props.arr.map((item) => {
    return (
      <div class={iconClass(item.id)} id={iconClass(item.id)} style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + item.img + ")"}}>
        {/*background social icon img*/}
      </div>
    );
  })
}


/*
* функция присваивания класса для вывода картинки иконки
 */
function iconClass(x) {
  switch (x) {
    case 'whatsApp':
      return `whats`;

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
