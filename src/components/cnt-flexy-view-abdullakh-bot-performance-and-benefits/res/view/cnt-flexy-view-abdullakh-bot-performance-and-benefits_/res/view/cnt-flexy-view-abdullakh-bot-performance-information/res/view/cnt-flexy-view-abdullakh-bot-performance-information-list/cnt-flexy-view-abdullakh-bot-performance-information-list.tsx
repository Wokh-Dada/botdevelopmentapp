import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-performance-information-list',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-performance-information-list.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotPerformanceInformationList implements ComponentInterface {
  /**
   * объект с массивом и данными PerformanceInformationList
   * */
  @Prop() PerformanceInformation: any;

  /**
   * объект с массивом и данными PerformanceInformationList
   * */
  @Prop() endText: string;

  /**
   * клик по элементам компонента PerformanceInformation подкомпонента PerformanceInformationList
   * */
  @Event() clickOnPerformanceInformation: EventEmitter;

  render() {
    return (
      <div>
        <List arr={this.PerformanceInformation}
          onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation)}
        />
        <div class="PerformanceInformationContentEndText"
          onClick={() => this.clickOnPerformanceInformation.emit(this.PerformanceInformation.ContentRightEndText)}
        >
          {this.endText}
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов list в компоненте PerformanceInformationList
 */
const List = (props) => {
  return props.arr.map((item) => {
    return (
      <span>
        {item.text}
        <br/>
      </span>
    );
  })
}
