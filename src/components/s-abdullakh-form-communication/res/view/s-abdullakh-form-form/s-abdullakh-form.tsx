import {Component, ComponentInterface, h, Prop} from '@stencil/core';


@Component({
  tag: 's-abdullakh-form',
  styleUrl: 's-abdullakh-form.css',
  shadow: false,
})
export class SAbdullakhForm implements ComponentInterface {

  @Prop() arr: any;

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
          <div class="form_text">
            {this.arr.numberInterview})
          </div>
          <div>
            <input class="inputSize" type="tel" placeholder="(999) 999-99-99"/>
          </div>
        </div>
        <div class="form_btn_block mt-4">
          <button class="form_btn">
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
