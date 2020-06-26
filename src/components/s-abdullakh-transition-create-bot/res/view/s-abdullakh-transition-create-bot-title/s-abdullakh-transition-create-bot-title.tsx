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
    /**
     * вызов функции анимации блока transitionCreateBotImg при скроле
     * */
    // this.scrollX()

    return (
      <div class="transitionCreateBotImgPosition">
        <div class="transitionCreateBotImg"
             id="transitionCreateBotImg"
             style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}
             onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.imgUrl)}
             ref={(el) => this.creatBotImg = el}
        >
          {/*вызов картинки из массива*/}
        </div>
        <div class="transitionCreateBotTitleBlock">
          <div class="transitionCreateBotTitle"
               innerHTML={this.arr.title}
               onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.title)}>
            {/*вызов html разметки из массива*/}
          </div>
        </div>
      </div>
    );
  }

  /**
   * функция для движения картинки во время скрола
   * */
  // public scrollX() {
  //   document.onwheel = () => {
  //     let gear = window.scrollY;
  //     this.creatBotImg.style.transform = yScroll(gear);
  //
  //     // console.log('creatBotImg',gear )
  //
  //     function yScroll(x) {
  //       if (x <= 1017) {
  //         return "translateX(-52%)";
  //       } else if (x < 1217) {
  //         return "translateX(-39%)";
  //       } else if (x < 1267) {
  //         return "translateX(-33%)";
  //       } else if (x < 1317) {
  //         return "translateX(-26%)";
  //       } else if (x < 1367) {
  //         return "translateX(-19%)";
  //       } else if (x < 1417) {
  //         return "translateX(-13%)";
  //       } else if (x < 1467) {
  //         return "translateX(-6%)";
  //       } else if (x < 1517) {
  //         return "translateX(0%)";
  //       } else if (x < 1557) {
  //         return "translateX(0%)";
  //       }
  //     }
  //   }
  // }

}


window.addEventListener("wheel", () => {


  yScrollConsultant(document.documentElement.clientWidth);
  console.log(window.scrollY)

  function yScrollConsultant(x) {
    let gear = window.scrollY;
    let trans = document.getElementById('transitionCreateBotImg').style.transform
    if (x > 1200) {
      scroll1200Width(gear)
    }
    function scroll1200Width(x) {
      // let _52 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-52%)"
      // let _39 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-39%)"
      // let _33 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-33%)"
      // let _26 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-26%)"
      // let _19 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-19%)"
      // let _13 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-13%)"
      // let _6 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-6%)"
      // let _0 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)"
      if (x <= 1059) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-52%)";
      } else if (x < 1217) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-39%)";
      } else if (x < 1267) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-33%)";
      } else if (x < 1317) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-26%)";
      } else if (x < 1367) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-19%)";
      } else if (x < 1417) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-13%)";
      } else if (x < 1467) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-6%)";
      } else if (x < 1517) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      } else if (x < 1557) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }
    }
    function scroll992Width(x) {
      if (x <= 1017) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-52%)";
      } else if (x < 1217) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-39%)";
      } else if (x < 1267) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-33%)";
      } else if (x < 1317) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-26%)";
      } else if (x < 1367) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-19%)";
      } else if (x < 1417) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-13%)";
      } else if (x < 1467) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-6%)";
      } else if (x < 1517) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      } else if (x < 1557) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }
    }
  }
})
// if (x <= 1017) {
//   return "translateX(-52%)";
// } else if (x < 1217) {
//   return "translateX(-39%)";
// } else if (x < 1267) {
//   return "translateX(-33%)";
// } else if (x < 1317) {
//   return "translateX(-26%)";
// } else if (x < 1367) {
//   return "translateX(-19%)";
// } else if (x < 1417) {
//   return "translateX(-13%)";
// } else if (x < 1467) {
//   return "translateX(-6%)";
// } else if (x < 1517) {
//   return "translateX(0%)";
// } else if (x < 1557) {
//   return "translateX(0%)";
// }
