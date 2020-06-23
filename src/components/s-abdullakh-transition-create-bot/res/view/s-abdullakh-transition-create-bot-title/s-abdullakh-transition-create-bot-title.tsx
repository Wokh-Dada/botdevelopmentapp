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

  /**
   * ref для подключения к картинке
   * */
  creatBotImg: HTMLElement;




  render() {
    this.scrollX()
    return (
      <div class="transitionCreateBotImgPosition">
        <div class="transitionCreateBotImg"
             style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}
             onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.imgUrl)}
             ref={(el) => this.creatBotImg = el}
        >
          {/*вызов картинки из массива*/}
        </div>
        <div class="transitionCreateBotTitleBlock">
          <div class="transitionCreateBotTitle"
               innerHTML={this.arr.title}
               onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.title)}
          >
            {/*вызов html разметки из массива*/}
          </div>
        </div>
      </div>
    );
  }

  /**
   * функция для движения картинки во время скрола
   * */
  public scrollX() {
    document.onwheel = () => {
      let gear = window.scrollY;
      this.creatBotImg.style.transform = yScroll(gear);

      function yScroll(x) {
        if (x <= 1017) {
          return "translateX(-52%)";
        } else if (x <= 1117) {
          return "translateX(-39%)";
        } else if (x <= 1217) {
          return "translateX(-26%)";
        } else if (x <= 1317) {
          return "translateX(-13%)";
        } else if (x <= 1417) {
          return "translateX(0%)";
        }
      }

    }
  }
}
