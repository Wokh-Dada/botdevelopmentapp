import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {SSAbdullakhPerformanceInformation} from "./interface/common.interface";

@Component({
  tag: 's-abdullakh-performance-information',
  styleUrl: 's-abdullakh-performance-information.css',
  shadow: false,
})
export class SAbdullakhPerformanceInformation implements ComponentInterface {
  /**
   * массив для вывода элементов PerformanceInformation
   * */
  @Prop() PerformanceInformation: SSAbdullakhPerformanceInformation;

  /**
   * клик по элементам компонента PerformanceInformation
   * */
  @Event() clickOnPerformanceInformation: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <section class="PerformanceInformation" id="performanceInformation">
        <div class='container'>
          <div class="PerformanceInformationTitleBlock">
            <div class="PerformanceInformationTitle"
                 onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.title)}
            >
              {this.PerformanceInformation.title}
            </div>
          </div>
          <div class="PerformanceInformationContentBlock">
            <div class="PerformanceInformationContent">
              <div class="PerformanceInformationContentStart">
                <s-abdullakh-performance-information-list PerformanceInformation={this.PerformanceInformation.right}
                                                          endText={this.PerformanceInformation.ContentRightEndText}
                />
                <div class="PerformanceInformationContentCenter visibilityProductInfo_start"
                     style={{backgroundImage: "url(" + this.PerformanceInformation.imgUrl + ")"}}
                     onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}
                >

                </div>
              </div>
              <div class="PerformanceInformationContentCenter visibilityProductInfo_center"
                   style={{backgroundImage: "url(" + this.PerformanceInformation.imgUrl + ")"}}
                   onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}
              >

              </div>
              <div class="PerformanceInformationContentEnd">
                <div class="PerformanceInformationContentCenter  visibilityProductInfo_end"
                     style={{backgroundImage: "url(" + this.PerformanceInformation.imgUrl + ")"}}
                     onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.imgUrl)}
                >

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
                      }}
              >
                <a>
                  {this.PerformanceInformation.btnText}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

