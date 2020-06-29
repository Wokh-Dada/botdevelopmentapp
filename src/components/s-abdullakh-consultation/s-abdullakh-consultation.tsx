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
   * переменная для observe функции скрола
   * */
  observer: IntersectionObserver;

  /**
   * ref для подключения к родительскому блоку картинки
   * */
  consultantImgParent: HTMLElement;

  /**
   * ref для подключения к картинке
   * */
  consultantImg: HTMLElement;

 render() {
    return (
      <section class="Consultation">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 d-flex justify-content-center" ref={(el) => this.consultantImgParent = el}>
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
  componentDidLoad() {
    this.initAnimation();
  }

  disconnectedCallback() {
    this.observer && this.observer.observe
  }

  /**
   * функция для движения картинки во время скрола
   * */
  private initAnimation(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [
        0.1, 0.15,
        0.2, 0.25,
        0.3, 0.35,
        0.4, 0.45,
        0.5, 0.55,
        0.6, 0.65,
        0.7, 0.75,
        0.8, 0.85,
        0.9, 0.95,
        1
      ],
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const intersectionRatio = entries[0].intersectionRatio,
            top = entries[0].boundingClientRect.top,
            transformX = 120 - (120 * intersectionRatio);
      if (top > 0){
        return this.consultantImg.style.transform = `translateX(-${transformX}%)`;
      }
    };
    this.observer = new IntersectionObserver(callback, options);
    this.observer.observe(this.consultantImgParent);
  };
}

