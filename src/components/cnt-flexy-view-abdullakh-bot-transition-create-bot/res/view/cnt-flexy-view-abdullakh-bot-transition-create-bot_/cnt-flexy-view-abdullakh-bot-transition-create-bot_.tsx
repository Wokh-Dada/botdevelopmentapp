import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhTransitionCreateBot} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-transition-create-bot_',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-transition-create-bot_.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotTransitionCreateBot_ implements ComponentInterface {
  /**
   * массив для вывода элементов TransitionCreateBot
   * */
  @Prop() payload: SSAbdullakhTransitionCreateBot;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <section class="transitionCreateBot">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <CreateBotTitle arr={this.payload.title}/>
            </div>
            <div class="col-lg-6">
              <CreateBotFollow arr={this.payload.follow}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов transition-create-bot-title
 */
const CreateBotTitle = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-transition-create-bot-title arr={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов transition-create-bot-follow
 */
const CreateBotFollow = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-transition-create-bot-follow arr={item}/>
    );
  })
}
