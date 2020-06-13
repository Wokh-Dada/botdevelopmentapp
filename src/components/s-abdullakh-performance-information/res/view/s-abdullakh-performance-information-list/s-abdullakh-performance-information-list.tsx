import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-performance-information-list',
  styleUrl: 's-abdullakh-performance-information-list.css',
  shadow: false,
})
export class SAbdullakhPerformanceInformationList implements ComponentInterface {
  @Prop() PerformanceInformation: any;

  render() {
    return (
      <div>
        <List arr={this.PerformanceInformation.right}/>

        <div class="PerformanceInformationContentEndText">
          {this.PerformanceInformation.ContentRightEndText}
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
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
