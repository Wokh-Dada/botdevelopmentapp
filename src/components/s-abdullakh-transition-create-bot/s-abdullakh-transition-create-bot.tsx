import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhTransitionCreateBot} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-transition-create-bot',
  styleUrl: 's-abdullakh-transition-create-bot.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBot implements ComponentInterface {
  /**
   * массив для вывода элементов TransitionCreateBot
   * */
  @Prop() TransitionCreateBot: SSAbdullakhTransitionCreateBot;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  render() {
    return (
      <section class="transitionCreateBot">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <CreateBotTitle arr={this.TransitionCreateBot.title}/>
            </div>
            <div class="col-lg-6">
              <CreateBotFollow arr={this.TransitionCreateBot.follow}/>
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
      <s-abdullakh-transition-create-bot-title arr={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов transition-create-bot-follow
 */
const CreateBotFollow = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-transition-create-bot-follow arr={item}/>
    );
  })
}
