import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';


@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form-close',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form-close.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotFormClose implements ComponentInterface {
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

