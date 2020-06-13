import {Component, h} from '@stencil/core';
import {
  BenefitsBots, Consultation,
  header,
  PerformanceInformation,
  ProductInformation,
  ProductPresentation,
  TransitionCreateBot
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  render() {
    return (
      <div>
        <s-abdullakh-header header={header}/>
        <s-abdullakh-product-presentation ProductPresentation={ProductPresentation} />
        <s-abdullakh-product-information ProductInformation={ProductInformation} />
        <s-abdullakh-transition-create-bot TransitionCreateBot={TransitionCreateBot}/>
        <s-abdullakh-performance-information PerformanceInformation={PerformanceInformation}/>
        <s-abdullakh-benefits-bots BenefitsBots={BenefitsBots} />
        <s-abdullakh-consultation Consultation={Consultation} />
        <s-abdullakh-tariffs/>
      </div>
    );
  }
}
