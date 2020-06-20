import {Component, h, State} from '@stencil/core';
import {
  BenefitsBots, Consultation, formCommunication,
  header, PerformanceandBenefitsbckgrnd,
  PerformanceInformation,
  ProductInformation,
  ProductPresentation, Tariffs,
  TransitionCreateBot
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  /**
   * boolean значение для вывода компонента form-communication
   */
  @State() popupComplited: boolean;

  render() {
    return (
      <div>
        {
          this.popupComplited ?
            <s-abdullakh-form-communication
              formCommunication={formCommunication}
              onCloseForm={() => {
                this.closeForm()
              }}/> :
            ''
        }

        <s-abdullakh-header header={header} onClickOnHeader={(event) => this.clickOnHeader(event)}/>

        <s-abdullakh-product-presentation ProductPresentation={ProductPresentation}
                                          onClickOnProductPresentation={(event) => this.clickOnProductPresentation(event)}
                                          onOpenForm={() => this.openForm()}
        />

        <s-abdullakh-product-information
          ProductInformation={ProductInformation}
          onClickOnProductInformation={(event) => this.clickOnProductInformation(event)}
          onOpenForm={() => this.openForm()}/>

        <s-abdullakh-transition-create-bot
          TransitionCreateBot={TransitionCreateBot}
          onClickOnTransitionCreateBot={(event) => this.clickOnTransitionCreateBot(event)}
          onOpenForm={() => this.openForm()}/>

        <div class="PerformanceandBenefitsbckgrnd"
             style={{backgroundImage: "url(" + PerformanceandBenefitsbckgrnd + ")"}}
             onClick={(event) => this.PerformanceandBenefitsbckgrnd(event)}
        >

          <s-abdullakh-performance-information
            PerformanceInformation={PerformanceInformation}
            onClickOnPerformanceInformation={(event) => this.clickOnPerformanceInformation(event)}
            onOpenForm={() => this.openForm()}
          />
          <s-abdullakh-benefits-bots
            BenefitsBots={BenefitsBots}
            onClickOnBenefitsBots={(event) => this.clickOnBenefitsBots(event)}
          />

        </div>

        <s-abdullakh-consultation
          Consultation={Consultation}
          onClickOnConsultation={(event) => this.clickOnConsultation(event)}
          onOpenForm={() => this.openForm()}
        />

        <s-abdullakh-tariffs
          Tariffs={Tariffs}
          onClickOnTariffs={(event) => this.clickOnTariffs(event)}
          onOpenForm={() => this.openForm()}
        />

      </div>
    );
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.popupComplited = true;
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
  }

  /**
   * клик по элементам компонента header
   */
  public clickOnHeader({detail}) {
    return console.log("clickOnHeader:", detail);
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnProductPresentation({detail}) {
    return console.log("clickOnProductPresentation:", detail);
  }

  /**
   * клик по элементам компонента product-information
   */
  public clickOnProductInformation({detail}) {
    return console.log("clickOnProductInformation:", detail);
  }

  /**
   * клик по элементам компонента product-presentation
   */
  public clickOnTransitionCreateBot({detail}) {
    return console.log("clickOnTransitionCreateBot:", detail);
  }

  /**
   * клик по элементам блока PerformanceandBenefitsbckgrnd
   */
  public PerformanceandBenefitsbckgrnd({detail}) {
    return console.log("PerformanceandBenefitsbckgrnd:", detail);
  }

  /**
   * клик по элементам компонента PerformanceInformation
   */
  public clickOnPerformanceInformation({detail}) {
    return console.log("PerformanceInformation:", detail);
  }

  /**
   * клик по элементам компонента BenefitsBots
   */
  public clickOnBenefitsBots({detail}) {
    return console.log("BenefitsBots:", detail);
  }

  /**
   * клик по элементам компонента Consultation
   */
  public clickOnConsultation({detail}) {
    return console.log("Consultation:", detail);
  }

  /**
   * клик по элементам компонента Tariffs
   */
  public clickOnTariffs({detail}) {
    return console.log("Tariffs:", detail);
  }

}

// /**
//  * клик по элементам компонента header
//  */
// const clickOnPopup = () => {
//   popupComplited = !popupComplited
//
// }
