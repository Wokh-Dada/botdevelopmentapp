import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';


@Component({
  tag: 's-abdullakh-form-close',
  styleUrl: 's-abdullakh-form-close.css',
  shadow: false,
})
export class SAbdullakhFormClose implements ComponentInterface {
  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  render() {
    return (
        <div class="close" onClick={() => this.closeForm.emit()}>

        </div>
    );
  }

}

