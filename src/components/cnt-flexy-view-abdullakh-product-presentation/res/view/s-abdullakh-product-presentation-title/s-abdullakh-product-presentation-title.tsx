import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {markdown} from "markdown";

@Component({
  tag: 's-abdullakh-product-presentation-title',
  styleUrl: 's-abdullakh-product-presentation-title.css',
  shadow: false,
})
export class SAbdullakhProductPresentationTitle implements ComponentInterface {
  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() arr: any;

  /**
   * массив для вывода элементов ProductPresentationTitle
   * */
  @Prop() img: string;

  /**
   * клик по элементам компонента ProductPresentation подкомпонента ProductPresentationTitle
   * */
  @Event() clickOnProductPresentation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;


  render() {
    return (
      <div class="presentationTitleBlock">
        <div class="presentationTitleInBlock">
          <div
            class="presentationTitle animate__animated animate__fadeInLeft"
            innerHTML={markdown.toHTML(this.arr.text)}
            onClick={() => this.clickOnProductPresentation.emit(this.arr.text)}>
            {/*вывод текста из массива через маркдаун*/}
            <div class="presentationTitleUnderlineBlock">
              <div class="presentationTitleUnderline"
                   style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}
                   onClick={() => this.clickOnProductPresentation.emit(this.arr.imgUr)}>
                {/*background Underline line img*/}
              </div>
            </div>
          </div>
          <div class="d-lg-none d-block">
            <s-abdullakh-product-presentation-img img={this.img}/>
          </div>
          <div class="presentationTitlePrice animate__animated animate__fadeInLeft"
               onClick={() => this.clickOnProductPresentation.emit(this.arr.price)}>
            {this.arr.behindText}<span> {this.arr.price}</span>
          </div>
          <div class="presentationBtnBlock animate__animated animate__fadeInUpBig">
            <button class="presentationBtn" onClick={() => {
              this.clickOnProductPresentation.emit(this.arr.btnText);
              this.openForm.emit()
            }}>
              {this.arr.btnText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
