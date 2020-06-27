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
    if (x > 995) {
      scroll1200Width(gear)
    }else if (x > 768){
      scroll992Width(gear)
    }else if (x < 768){
      scroll768Width(gear)
    }

    /**
     *функция анимации для экранов шириной до 995px
     **/
    function scroll1200Width(x) {
      // let trans = document.getElementById('transitionCreateBotImg').style.transform
      // let _52 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-52%)"
      // let _39 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-39%)"
      // let _33 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-33%)"
      // let _26 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-26%)"
      // let _19 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-19%)"
      // let _13 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-13%)"
      // let _6 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(-6%)"
      // let _0 = document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)"
      if (x < 900) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-110%)";
      } else if (x < 950) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-100%)";
      } else if (x < 1000) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-90%)";
      } else if (x < 1050) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-80%)";
      } else if (x < 1100) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-70%)";
      } else if (x < 1150) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-60%)";
      } else if (x < 1200) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-50%)";
      } else if (x < 1250) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-40%)";
      } else if (x < 1300) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-30%)";
      } else if (x < 1350) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-20%)";
      } else if (x < 1400) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-10%)";
      }else if (x < 1450) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }else if (x < 1500) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }
    }
    /**
     *функция анимации для экранов шириной до 768px
     **/
    function scroll992Width(x) {
      if (x < 1100) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-100%)";
      } else if (x < 1150) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-90%)";
      } else if (x < 1200) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-80%)";
      } else if (x < 1250) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-70%)";
      } else if (x < 1300) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-60%)";
      } else if (x < 1350) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-50%)";
      } else if (x < 1400) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-40%)";
      } else if (x < 1450) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-30%)";
      } else if (x < 1500) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-20%)";
      } else if (x < 1550) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-10%)";
      } else if (x < 1600) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }else if (x < 1650) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }
    }
    /**
     *функция анимации для экранов шириной от 768px
     **/
    function scroll768Width(x) {
      if (x < 1950) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-100%)";
      } else if (x < 1985) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-90%)";
      } else if (x < 2020) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-80%)";
      } else if (x < 2055) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-70%)";
      } else if (x < 2090) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-60%)";
      } else if (x < 2125) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-50%)";
      } else if (x < 2160) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-40%)";
      } else if (x < 2195) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-30%)";
      } else if (x < 2230) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-20%)";
      } else if (x < 2265) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(-10%)";
      } else if (x < 2300) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }else if (x < 2335) {
        return document.getElementById('transitionCreateBotImg').style.transform = "translateX(0%)";
      }
    }
  }
});
