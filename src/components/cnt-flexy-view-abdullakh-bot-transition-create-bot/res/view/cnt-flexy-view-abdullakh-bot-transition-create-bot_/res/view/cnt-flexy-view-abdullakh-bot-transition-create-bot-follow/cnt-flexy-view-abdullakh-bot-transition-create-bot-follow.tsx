import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-transition-create-bot-follow',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-transition-create-bot-follow.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotTransitionCreateBotFollow implements ComponentInterface {
  /**
   * массив для вывода элементов подкомпонента TransitionCreateBotFollow компонента TransitionCreateBot
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter

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
            <div class="transitionCreateBotBtnBlockInner">
              <button class="transitionCreateBotBtn" innerHTML={this.arr.btnText}
                      onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.btnText)}
              >
                {/*вызов текста массива*/}
              </button>
              <div class="CreateBotBtnBlock-border" onClick={() => {
                this.clickOnTransitionCreateBot.emit(this.arr.btnText);
                this.openForm.emit();
              }}>
                {/*анимация border вокруг button*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
