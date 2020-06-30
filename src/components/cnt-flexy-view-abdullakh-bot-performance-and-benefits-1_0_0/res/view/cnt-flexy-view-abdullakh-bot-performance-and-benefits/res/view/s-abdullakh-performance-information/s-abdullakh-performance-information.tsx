import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhPerformanceInformation} from "./interface/common.interface";
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

@Component({
  tag: 's-abdullakh-performance-information',
  styleUrl: 's-abdullakh-performance-information.css',
  shadow: false,
})
export class SAbdullakhPerformanceInformation implements ComponentInterface {
  /**
   * массив для вывода элементов PerformanceInformation
   **/
  @Prop() PerformanceInformation: SSAbdullakhPerformanceInformation;

  /**
   * клик по элементам компонента PerformanceInformation
   **/
  @Event() clickOnPerformanceInformation: EventEmitter;

  /**
   * Вызов модального окна формы
   **/
  @Event() openForm: EventEmitter;

  render() {
    return (
      <section class="PerformanceInformation" id="performanceInformation">
        <div class='container'>
          <div class="PerformanceInformationTitleBlock">
            <div class="PerformanceInformationTitle wow animate__animated animate__backInUp"
                 onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.title)}
            >
              {this.PerformanceInformation.title}
            </div>
          </div>
          <div class="PerformanceInformationContentBlock">
            <div class="PerformanceInformationContent wow animate__animated animate__backInUp">
              <div class="PerformanceInformationContentStart">
                <s-abdullakh-performance-information-list PerformanceInformation={this.PerformanceInformation.right}
                                                          endText={this.PerformanceInformation.ContentRightEndText}/>
                <div class="PerformanceInformationContentCenter visibilityProductInfo_start"
                     style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.PerformanceInformation.imgUrl + ")"}}
                     onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}>
                  {/*background для блока из массива PerformanceInformation.imgUrl*/}
                </div>
              </div>
              <div
                class="PerformanceInformationContentCenter visibilityProductInfo_center wow animate__animated animate__fadeInDownBig"
                style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.PerformanceInformation.imgUrl + ")"}}
                onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}>
                {/*background для блока из массива PerformanceInformation.imgUrl*/}
              </div>
              <div class="PerformanceInformationContentEnd">
                <div class="PerformanceInformationContentCenter visibilityProductInfo_end"
                     style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.PerformanceInformation.imgUrl + ")"}}
                     onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}>
                  {/*background для блока из массива PerformanceInformation.imgUrl*/}
                </div>
                <s-abdullakh-performance-information-list PerformanceInformation={this.PerformanceInformation.left}
                                                          endText={this.PerformanceInformation.ContentLeftEndText}/>
              </div>
            </div>
            <div class="PerformanceInformationBtnBlock">
              <button class="PerformanceInformationBtn"
                      onClick={() => {
                        this.clickOnPerformanceInformation.emit(this.PerformanceInformation.btnText);
                        this.openForm.emit();
                      }}>
                  {this.PerformanceInformation.btnText}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

