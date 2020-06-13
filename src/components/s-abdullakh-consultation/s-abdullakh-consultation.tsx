import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-consultation',
  styleUrl: 's-abdullakh-consultation.css',
  shadow: false,
})
export class SAbdullakhConsultation implements ComponentInterface {
  @Prop() Consultation: any;

  render() {
    return (
      <section class="Consultation">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="Consultation_img"
                   style={{backgroundImage: "url(" + this.Consultation.imgUrl + ")"}}>

              </div>
            </div>
            <div class="col-6">
              <div class="Consultation_advertising_link_block">
                <div class="Consultation_title_block">
                  <div class="Consultatio_title">
                    {this.Consultation.title}
                  </div>
                </div>
                <div class="Consultation_text" innerHTML={this.Consultation.text}>

                </div>
                <div class="Consultation_btn_block">
                  <button class="Consultation_btn">
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
