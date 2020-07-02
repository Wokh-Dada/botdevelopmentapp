import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';


@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form-communication',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form-communication.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotFormCommunication implements ComponentInterface {
  /**
   * данные компонента FormCommunication
   */
  @Prop() payload: any;

  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  render() {
    return (
      <div class="form_bckgrnd">
        <cnt-flexy-view-abdullakh-bot-form-close/>
        <div class="form_position">
          <div class="formBlock">
            <div class="mobile_form_line">

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
