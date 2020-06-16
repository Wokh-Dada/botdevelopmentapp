import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot-title',
  styleUrl: 's-abdullakh-transition-create-bot-title.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBotTitle implements ComponentInterface {
  /**
   * массив для вывода элементов подкомпонента TransitionCreateBotTitle компонента TransitionCreateBot
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  render() {
    return (
      <div class="transitionCreateBotImgPosition">
        <div
          class="transitionCreateBotImg"
          style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}
          onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.imgUrl)}>

        </div>
        <div class="transitionCreateBotTitleBlock">
          <div
            class="transitionCreateBotTitle"
            innerHTML={this.arr.title}
            onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.title)}>

          </div>
        </div>
      </div>
    );
  }
}
