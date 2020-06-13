import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-performance-information',
  styleUrl: 's-abdullakh-performance-information.css',
  shadow: false,
})
export class SAbdullakhPerformanceInformation implements ComponentInterface {
  @Prop()PerformanceInformation: any;

  render() {
    return (
      <section class="PerformanceInformation">
        <div class='container'>
          <div class="PerformanceInformationTitleBlock">
            <div class="PerformanceInformationTitle">
              {this.PerformanceInformation.title}
            </div>
          </div>
          <div class="PerformanceInformationContentBlock">
            <div class="PerformanceInformationContent">
              <div class="PerformanceInformationContentStart">
                <s-abdullakh-performance-information-list PerformanceInformation={this.PerformanceInformation} />
              </div>
              <div class="PerformanceInformationContentCenter"
                   style={{backgroundImage: "url(" + this.PerformanceInformation.imgUrl + ")"}}>
              </div>
              <div class="PerformanceInformationContentEnd">
                <s-abdullakh-performance-information-list PerformanceInformation={this.PerformanceInformation} />
              </div>
            </div>
            <div class="PerformanceInformationBtnBlock">
              <button class="PerformanceInformationBtn">
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

