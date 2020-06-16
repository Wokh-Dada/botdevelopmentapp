import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header-start',
  styleUrl: 's-abdullakh-header-start.css',
  shadow: false,
})
export class SAbdullakhHeaderStart implements ComponentInterface {
  /**
   * объект с url logo
   * */
  @Prop() logo: any;

  /**
   * клик по элементy HeaderStart компонента header
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <div class="logo d-flex justify-content-start"
           style={{backgroundImage: "url(" + this.logo + ")"}}
           onClick={() => {
             this.clickOnHeader.emit(this.logo)
           }}>

      </div>
    );
  }

}
