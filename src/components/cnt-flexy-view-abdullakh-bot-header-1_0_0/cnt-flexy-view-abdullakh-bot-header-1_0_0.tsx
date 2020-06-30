import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-header-1_0_0',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-header-1_0_0.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotHeader1_0_0 implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов header-start header-end
   * */
  @Prop() categories : any ;

  @Prop() pathToAssets: string;

  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }

  render() {
    return (
      <cnt-flexy-view-abdullakh-bot-header categories={this.categories} onClickOnHeader={(event) => this.clickOnHeader(event)}/>
    );
  }

  /**
   * клик по элементам компонента header
   */
  public clickOnHeader({detail}) {
    return console.log("clickOnHeader:", detail);
  }
}


