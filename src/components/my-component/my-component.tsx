import {Component, h, State} from '@stencil/core';
import {
  Consultation, formCommunication,
  header, PerformanceAndBenefits,
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
                                          onOpenForm={() => this.openForm()}/>

        <s-abdullakh-product-information
          ProductInformation={ProductInformation}
          onClickOnProductInformation={(event) => this.clickOnProductInformation(event)}
          onOpenForm={() => this.openForm()}/>

        <s-abdullakh-transition-create-bot
          TransitionCreateBot={TransitionCreateBot}
          onClickOnTransitionCreateBot={(event) => this.clickOnTransitionCreateBot(event)}
          onOpenForm={() => this.openForm()}/>

          <s-abdullakh-performance-and-benefits
            PerformanceAndBenefits = {PerformanceAndBenefits}
            onClickOnPerformanceAndBenefits={(event) => this.clickOnPerformanceAndBenefits(event)}
            onOpenForm={() => this.openForm()}/>

        <s-abdullakh-consultation
          Consultation={Consultation}
          onClickOnConsultation={(event) => this.clickOnConsultation(event)}
          onOpenForm={() => this.openForm()}

        />

        <s-abdullakh-tariffs
          Tariffs={Tariffs}
          onClickOnTariffs={(event) => this.clickOnTariffs(event)}
          onOpenForm={() => this.openForm()}/>

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
   * клик по элементам компонента PerformanceAndBenefits
   */
  public clickOnPerformanceAndBenefits({detail}) {
    return console.log("PerformanceInformation:", detail);
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

// document.onwheel = console.log('a')

// /**
//  * клик по элементам компонента header
//  */
// const clickOnPopup = () => {
//   popupComplited = !popupComplited
//
// }
// let a = document.getElementById('Consultation_img')
// console.log(a)
// consultantScrollY(a)
//
// function consultantScrollY(x) {
//   document.onwheel = () => {
//     let gear = window.scrollY;
//     if (x === 'Consultation_img'){
//       yScrollConsultant(x)
//       x.style.transform = yScrollConsultant(gear);
//       console.log('consultant', gear )
//       function yScrollConsultant(x) {
//         if (x <= 3400) {
//           return "translateX(-110%)";
//         } else if (x < 3458) {
//           return "translateX(-100%)";
//         }  else if (x < 3516) {
//           return "translateX(-90%)";
//         } else if (x < 3574) {
//           return "translateX(-80%)";
//         } else if (x < 3633) {
//           return "translateX(-70%)";
//         } else if (x < 3691) {
//           return "translateX(-60%)";
//         } else if (x < 3749) {
//           return "translateX(-50%)";
//         } else if (x < 3807) {
//           return "translateX(-40%)";
//         } else if (x < 3866) {
//           return "translateX(-30%)";
//         } else if (x < 3924) {
//           return "translateX(-20%)";
//         } else if (x < 3982) {
//           return "translateX(-10%)";
//         } else if (x < 4040) {
//           return "translateX(0%)";
//         } else if (x < 4100) {
//           return "translateX(0%)";
//         }
//       }
//     }
//
//   }
// }
