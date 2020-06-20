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
   * клик по элементам компонента Consultation
   * */
  @Event() clickOnConsultation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <section class="Consultation">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div
                class="Consultation_img"
                style={{backgroundImage: "url(" + this.Consultation.imgUrl + ")"}}
                onClick={() => this.clickOnConsultation.emit(this.Consultation.imgUrl)}>
                {/*вывод картинки из массива*/}
              </div>
            </div>
            <div class="col-lg-6 col-12 mt-5 pt-5">
              <div class="Consultation_advertising_link_block">
                <div class="Consultation_title_block">
                  <div class="Consultatio_title" onClick={() => this.clickOnConsultation.emit(this.Consultation.title)}>
                    {this.Consultation.title}
                  </div>
                </div>
                <div class="Consultation_text" innerHTML={this.Consultation.text}
                     onClick={() => this.clickOnConsultation.emit(this.Consultation.text)}>
                  {/*вывод HTML разметки из массива*/}
                </div>
                <div class="Consultation_btn_block">
                  <button class="Consultation_btn"
                          onClick={() => {
                            this.clickOnConsultation.emit(this.Consultation.btnText);
                            this.openForm.emit();
                          }}>
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
