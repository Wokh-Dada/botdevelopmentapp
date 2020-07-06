import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {AbdullakhBotForm} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotForm implements ComponentInterface {
  /**
   * данные из массива для компонента Form
   */
  @Prop() arr: AbdullakhBotForm;

  render() {
    return (
      <form class="form" action="">
        <div class="mt-4">
          <div class="form_text">
            {this.arr.nameInterview}
          </div>
          <div>
            <input class="inputSize" type="text"/>
          </div>
        </div>
        <div class="mt-4">
          <div class="form_text">
            {this.arr.businessInterview}
          </div>
          <div>
            <select class="inputSize">
              <Select arr={this.arr.businessSelect}/>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <div class="form_text">
            {this.arr.websiteInterview})
          </div>
          <div>
            <input class="inputSize" type="text"/>
          </div>
        </div>
        <div class="mt-4">
          <cnt-flexy-view-abdullakh-bot-form-input  phoneMask={this.arr.numberSection}/>
        </div>
        <div class="form_btn_block mt-4">
          <button class="form_btn" disabled={true}>
            {this.arr.btnText})
          </button>
        </div>
      </form>
    );
  }
}

/*
* компонентная функция для вывода элементов option
 */
const Select = (props) => {
  return props.arr.map((item) => {
    return (
      <option value={item.select} selected={item.selected}>
        {item.select}
      </option>
    );
  })
}
