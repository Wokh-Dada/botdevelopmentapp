import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot-title',
  styleUrl: 's-abdullakh-transition-create-bot-title.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBotTitle implements ComponentInterface {
  @Prop() arr: any;

  render() {
    return (
      <div>
        <div class="transitionCreateBotImg"
             style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}>
          {/*style={{backgroundImage: "url(" + this.imgUrl + ")"}}*/}
        </div>
        <div class="transitionCreateBotTitleBlock">
          <div class="transitionCreateBotTitle" innerHTML={this.arr.title}>
            {/*{this.arr.title}*/}
          </div>
        </div>
      </div>
    );
  }

}
