import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhConsultation} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-consultation',
  styleUrl: 's-abdullakh-consultation.css',
  shadow: false,
})
export class SAbdullakhConsultation implements ComponentInterface {
  /**
   * данные компонента Consultation
   * */
  @Prop() Consultation: SSAbdullakhConsultation;

  /**
   * данные компонента Consultation
   * */
  @Prop() gear: any;

  /**
   * клик по элементам компонента Consultation
   * */
  @Event() clickOnConsultation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  /**
   * ref для подключения к картинке
   * */
  consultantImg: HTMLElement;

  render() {
    /**
     * вызов функции анимации блока transitionCreateBotImg при скроле
     * */
    // this.consultantScrollY()
    // this.abcd()
    return (
      <section class="Consultation">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="Consultation_img"
                   id="Consultation_img"
                   style={{backgroundImage: "url(" + this.Consultation.imgUrl + ")"}}
                   onClick={() => this.clickOnConsultation.emit(this.Consultation.imgUrl)}
                   ref={(el) => this.consultantImg = el}
              >
                {/*вывод картинки из массива*/}
              </div>
            </div>
            <div class="col-lg-6 col-12 mt-5 pt-5">
              <div class="Consultation_advertising_link_block">
                <div class="Consultation_title_block">
                  <div class="Consultatio_title wow animate__animated animate__backInUp"
                       onClick={() => this.clickOnConsultation.emit(this.Consultation.title)}
                  >
                    {this.Consultation.title}
                  </div>
                </div>
                <div class="Consultation_text wow animate__animated animate__backInUp"
                     innerHTML={this.Consultation.text}
                     onClick={() => this.clickOnConsultation.emit(this.Consultation.text)}
                >
                  {/*вывод HTML разметки из массива*/}
                </div>
                <div class="Consultation_btn_block">
                  <button class="Consultation_btn wow animate__animated animate__backInUp"
                          onClick={() => {
                            this.clickOnConsultation.emit(this.Consultation.btnText);
                            this.openForm.emit();
                          }}
                  >
                    {this.Consultation.btnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * функция для движения картинки во время скрола
   * */
  // public consultantScrollY() {
  //   window.onwheel = () => {
  //     let gear = window.scrollY;
  //     this.consultantImg.style.transform = yScrollConsultant(gear);
  //     console.log('consultant', gear )
  //
  //     function yScrollConsultant(x) {
  //       if (x <= 3400) {
  //         return "translateX(-110%)";
  //       } else if (x < 3458) {
  //         return "translateX(-100%)";
  //       }  else if (x < 3516) {
  //         return "translateX(-90%)";
  //       } else if (x < 3574) {
  //         return "translateX(-80%)";
  //       } else if (x < 3633) {
  //         return "translateX(-70%)";
  //       } else if (x < 3691) {
  //         return "translateX(-60%)";
  //       } else if (x < 3749) {
  //         return "translateX(-50%)";
  //       } else if (x < 3807) {
  //         return "translateX(-40%)";
  //       } else if (x < 3866) {
  //         return "translateX(-30%)";
  //       } else if (x < 3924) {
  //         return "translateX(-20%)";
  //       } else if (x < 3982) {
  //         return "translateX(-10%)";
  //       } else if (x < 4040) {
  //         return "translateX(0%)";
  //       } else if (x < 4100) {
  //         return "translateX(0%)";
  //       }
  //     }
  //   }
  // }

  public abcd() {
    if (document.documentElement.clientHeight <= window.scrollY) {
      return alert(800)
    }
  }

}


window.addEventListener("wheel", () => {
  let gear = window.scrollY;

  window.document.getElementById('Consultation_img').style.transform = yScrollConsultant(gear);
  // console.log('consultant', document.documentElement.clientHeight)

  function yScrollConsultant(x) {
    if (x < 3400) {
      return "translateX(-110%)";
    } else if (x < 3458) {
      return "translateX(-100%)";
    } else if (x < 3516) {
      return "translateX(-90%)";
    } else if (x < 3574) {
      return "translateX(-80%)";
    } else if (x < 3633) {
      return "translateX(-70%)";
    } else if (x < 3691) {
      return "translateX(-60%)";
    } else if (x < 3749) {
      return "translateX(-50%)";
    } else if (x < 3807) {
      return "translateX(-40%)";
    } else if (x < 3866) {
      return "translateX(-30%)";
    } else if (x < 3924) {
      return "translateX(-20%)";
    } else if (x < 3982) {
      return "translateX(-10%)";
    } else if (x < 4040) {
      return "translateX(0%)";
    } else if (x < 4100) {
      return "translateX(0%)";
    }
  }
})

