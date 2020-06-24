import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';


@Component({
  tag: 's-abdullakh-form-communication',
  styleUrl: 's-abdullakh-form-communication.css',
  shadow: false,
})
export class SAbdullakhFormCommunication implements ComponentInterface {
  /**
   * данные компонента FormCommunication
   */
  @Prop() formCommunication: any;

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
            <Form arr={this.formCommunication.formInterviewText}/>
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
