import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot',
  styleUrl: 's-abdullakh-transition-create-bot.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBot implements ComponentInterface {
  @Prop() TransitionCreateBot: any;

  render() {
    return (
      <section class="transitionCreateBot">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <CreateBotTitle arr={this.TransitionCreateBot.title}/>
            </div>
            <div class="col-6">
              <CreateBotFollow arr={this.TransitionCreateBot.follow}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const CreateBotTitle = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-transition-create-bot-title arr={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const CreateBotFollow = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-transition-create-bot-follow arr={item}/>
    );
  })
}
