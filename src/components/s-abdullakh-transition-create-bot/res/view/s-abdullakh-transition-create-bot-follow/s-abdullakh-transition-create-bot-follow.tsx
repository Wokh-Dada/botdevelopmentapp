import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot-follow',
  styleUrl: 's-abdullakh-transition-create-bot-follow.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBotFollow implements ComponentInterface {
  /**
   * массив для вывода элементов подкомпонента TransitionCreateBotFollow компонента TransitionCreateBot
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  render() {
    return (
      <div class="transitionCreateBotTextBlock">
        <div class="innerCreateBotTextBlock">
          <div class="transitionCreateBotText" innerHTML={this.arr.text}
               onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.text)}
          >
            {/*вызов html разметки из массива*/}
          </div>
          <div class="transitionCreateBotBtnBlock">
            <div >
              <button class="transitionCreateBotBtn" innerHTML={this.arr.btnText}
                      onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.btnText)}
              >
                {/*вызов текста массива*/}
              </button>
              <div class="CreateBotBtnBlock-border">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
