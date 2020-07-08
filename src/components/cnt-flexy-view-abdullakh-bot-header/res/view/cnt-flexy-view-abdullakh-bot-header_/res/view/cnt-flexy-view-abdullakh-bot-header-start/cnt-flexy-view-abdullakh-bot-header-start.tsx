import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-header-start',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-header-start.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotHeaderStart implements ComponentInterface {
  /**
   * объект с url logo
   * */
  @Prop() logo: any;

  /**
   * клик по элементу HeaderStart компонента header
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {

    return (
      <div class="logo d-flex justify-content-start"
           style={{backgroundImage: "url(" + StorageAbdullakhBot.prefix + this.logo + ")"}}
           onClick={() => {
             this.clickOnHeader.emit(this.logo)
           }}>

      </div>
    );
  }

}
