import {Component, h, State} from '@stencil/core';
import {
  Consultation, footer, formCommunication,
  header, PerformanceAndBenefits,
  ProductInformation,
  ProductPresentation, Tariffs,
  TransitionCreateBot
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped:true
})
export class MyComponent {

  /**
   * boolean значение для вывода компонента form-communication
   */
  @State() popupComplited: boolean;

  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "https://cdn.ramman.net/flexy-view/abdullakh/bot/1.01/assets/";

  render() {
    return (
      <div>
        {this.popupComplited ? (
          <cnt-flexy-view-abdullakh-bot-form-communication-1_01
            payload={formCommunication}
            pathToAssets={this.testPathToAssets}
            onCloseForm={() => {
              this.closeForm();
            }}
          />
        ) : (
          ""
        )}

        <cnt-flexy-view-abdullakh-bot-header-1_01 pathToAssets={this.testPathToAssets} categories={header} />

        <cnt-flexy-view-abdullakh-bot-product-presentation-1_01
          payload={ProductPresentation}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-bot-product-information-1_01
          payload={ProductInformation}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-bot-transition-create-bot-1_01
          payload={TransitionCreateBot}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01
          payload={PerformanceAndBenefits}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-bot-consultation-1_01
          payload={Consultation}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-bot-tariffs-1_01
          payload={Tariffs}
          pathToAssets={this.testPathToAssets}
          onOpenForm={() => this.openForm()}
        />

        <cnt-flexy-view-abdullakh-universal-footer-1_01
          categories={footer}
          pathToAssets={this.testPathToAssets}
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
}
