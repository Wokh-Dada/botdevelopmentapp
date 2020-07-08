import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-header-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-header.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotHeader implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов header-start header-end
   * */
  @Prop() categories : any ;

  /**
   * префикс путь к картинкам
   * */
  @Prop() pathToAssets: string;


  /**
   * присваивание переданного пути общей переменной для вызова в любом месте
   * */
  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }

  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-header_ categories={this.categories} onClickOnHeader={(event) => this.clickOnHeader(event)}/>
    );
  }

  /**
   * клик по элементам компонента header
   */
  public clickOnHeader({detail}) {
    return console.log("clickOnHeader:", detail);
  }
}


