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
    return (
      <section class="Consultation">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 d-flex justify-content-center">
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
}


window.addEventListener("wheel", () => {

  yScrollConsultant(document.documentElement.clientWidth);

  function yScrollConsultant(x) {
    let gear = window.scrollY;
    if (x > 995) {
      scroll1200Width(gear)
    } else if (x > 768) {
      scroll992Width(gear)
    } else if (x > 576) {
      scroll768Width(gear)
    } else if (x < 479) {
      scroll479Width(gear)
    }

    /**
     *функция анимации для экранов шириной до 995px
     **/
    function scroll1200Width(x) {
      if (x < 3400) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-110%)";
      } else if (x < 3458) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-100%)";
      } else if (x < 3516) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-90%)";
      } else if (x < 3574) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-80%)";
      } else if (x < 3633) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-70%)";
      } else if (x < 3691) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-60%)";
      } else if (x < 3749) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-50%)";
      } else if (x < 3807) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-40%)";
      } else if (x < 3866) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-30%)";
      } else if (x < 3924) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-20%)";
      } else if (x < 3982) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-10%)";
      } else if (x < 4040) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      } else if (x < 4100) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      }
    }

    /**
     *функция анимации для экранов шириной до 768px
     **/
    function scroll992Width(x) {
      if (x < 4600) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-110%)";
      } else if (x < 4658) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-100%)";
      } else if (x < 4716) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-90%)";
      } else if (x < 4774) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-80%)";
      } else if (x < 4832) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-70%)";
      } else if (x < 4890) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-60%)";
      } else if (x < 4948) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-50%)";
      } else if (x < 5006) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-40%)";
      } else if (x < 5064) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-30%)";
      } else if (x < 5122) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-20%)";
      } else if (x < 5180) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-10%)";
      } else if (x < 5238) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      } else if (x < 5296) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      }
    }

    /**
     *функция анимации для экранов шириной от 768px
     **/
    function scroll768Width(x) {
      if (x < 5300) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-110%)";
      } else if (x < 5355) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-100%)";
      } else if (x < 5410) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-90%)";
      } else if (x < 5465) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-80%)";
      } else if (x < 5520) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-70%)";
      } else if (x < 5575) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-60%)";
      } else if (x < 5630) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-50%)";
      } else if (x < 5685) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-40%)";
      } else if (x < 5740) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-30%)";
      } else if (x < 5795) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-20%)";
      } else if (x < 5850) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-10%)";
      } else if (x < 5905) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      } else if (x < 5960) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      }
    }

    /**
     *функция анимации для экранов шириной от 768px
     **/
    function scroll479Width(x) {
      if (x < 5950) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-110%)";
      } else if (x < 5982) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-100%)";
      } else if (x < 6014) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-90%)";
      } else if (x < 6046) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-80%)";
      } else if (x < 6078) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-70%)";
      } else if (x < 6110) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-60%)";
      } else if (x < 6142) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-50%)";
      } else if (x < 6174) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-40%)";
      } else if (x < 6206) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-30%)";
      } else if (x < 6238) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-20%)";
      } else if (x < 6270) {
        return document.getElementById('Consultation_img').style.transform = "translateX(-10%)";
      } else if (x < 6302) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      } else if (x < 6334) {
        return document.getElementById('Consultation_img').style.transform = "translateX(0%)";
      }
    }

  }
})

