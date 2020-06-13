import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot-follow',
  styleUrl: 's-abdullakh-transition-create-bot-follow.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBotFollow implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
        <div class="transitionCreateBotTextBlock">
          <div class="innerCreateBotTextBlock">
            <div class="transitionCreateBotText" innerHTML={this.arr.text}>
              {/*{this.arr.text}*/}
            </div>
            <div class="transitionCreateBotBtnBlock">
              <button class="transitionCreateBotBtn" innerHTML={this.arr.btnText}>
                {/*{this.arr.btnText}*/}
              </button>
            </div>
          </div>
        </div>
    );
  }

}
