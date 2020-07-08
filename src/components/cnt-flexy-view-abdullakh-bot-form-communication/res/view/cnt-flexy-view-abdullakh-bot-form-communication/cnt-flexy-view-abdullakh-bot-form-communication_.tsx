import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhBotFormCommunication} from "./interface/common.interface";



@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form-communication_',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form-communication_.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotFormCommunication_ implements ComponentInterface {
  /**
   * данные компонента FormCommunication
   */
  @Prop() payload: AbdullakhBotFormCommunication;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * ref для закрытия модального окна
   */
  ourModal: HTMLElement;

  /**
   * Вызов функции вывода меню при условии совпадения таргета клика с нужным узлом
   */
  public clickPopUp (event) {
    console.log(event)
    if (event.target === this.ourModal){
      this.closeForm.emit()
    }
  };

  render() {
    return (
      <div class="form_bckgrnd" >
        <div class="closed" onClick={ (event) => this.clickPopUp(event)} ref={(el) => this.ourModal = el}>
          <cnt-flexy-view-abdullakh-bot-form-close/>
        </div>
        <div class="form_position">
          <div class="formBlock">
            <div class="mobile_form_line">
              <cnt-flexy-view-abdullakh-bot-form-close/>
            </div>
            <Form arr={this.payload.formInterviewText}/>
          </div>
        </div>
      </div>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const Form = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-form arr={item}/>
    );
  })
}
