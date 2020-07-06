import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-product-information-blocks',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-product-information-blocks.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotProductInformationBlocks implements ComponentInterface {
  /**
   * объект с данными и для элементов компонента ProductInformationBlocks
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента ProductInformation
   * */
  @Event() clickOnProductInformation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;


  render() {
    return (
      <div class="ProductInfoBlock">
        <div>
          <div class="ProductInfoBlockOuterImgBlock wow animate__animated animate__fadeInUpBig">
            <div class="ProductInfoBlockOuterImg"
                 style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.arr.outerImg + ")"}}
                 onClick={() => this.clickOnProductInformation.emit(this.arr.outerImg)}
            >
              {/*вывод внешней background картинки*/}
              <div class="ProductInfoBlockInnerImg"
                   style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.arr.innerImg + ")"}}
                   onClick={() => this.clickOnProductInformation.emit(this.arr.innerImg)}
              >
                {/*вывод внутренней background картинки*/}
              </div>
            </div>
          </div>
          <div class="ProductInfoTextBlock wow animate__animated animate__fadeInUpBig" innerHTML={this.arr.text}
               onClick={() => this.clickOnProductInformation.emit(this.arr.text)}>
            {/*вывод текста из массива в HTML разметке*/}
          </div>
          <div class="ProductInfoBtnBlock wow animate__animated animate__fadeInUpBig">
            <button class="ProductInfoBtn" onClick={() => {
              this.clickOnProductInformation.emit(this.arr.btnText);
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
