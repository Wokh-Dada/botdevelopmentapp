import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';


@Component({
  tag: 'cnt-flexy-view-bot-abdullakh-form-communication',
  styleUrl: 'cnt-flexy-view-bot-abdullakh-form-communication.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhFormCommunication implements ComponentInterface {
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
        <s-abdullakh-form-close/>
        <div class="form_position">
          <div class="formBlock">
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
      <s-abdullakh-form arr={item}/>
    );
  })
}
