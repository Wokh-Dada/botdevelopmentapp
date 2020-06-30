import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../../../../utils/utils";

@Component({
  tag: 's-abdullakh-tariffs-info-blocks',
  styleUrl: 's-abdullakh-tariffs-info-blocks.css',
  shadow: false,
})
export class SAbdullakhTariffsInfoBlocks implements ComponentInterface {
  /**
   * данные переданные методом map компоненту TariffsBlocks
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента Tariffs
   * */
  @Event() clickOnTariffs: EventEmitter;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;

  render() {
    return (
      <div class={blockClass(this.arr.class)}>
        <div class="Tariffs_info_block_outer_icon"
             style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.arr.outerImg + ")"}}
             onClick={() => this.clickOnTariffs.emit(this.arr.outerImg)}>
          {/*вывод внешней картинки из массива*/}
          <div class="Tariffs_info_block_inner_icon"
               style={{backgroundImage: "url(" +  StorageAbdullakhBot.prefix + this.arr.innerImg + ")"}}
               onClick={() => this.clickOnTariffs.emit(this.arr.innerImg)}>
            {/*вывод внутренней картинки из массива*/}
          </div>
        </div>
        <div class="Tariffs_info_block_title" onClick={() => this.clickOnTariffs.emit(this.arr.title)}>
          {this.arr.title}
        </div>
        <div class="Tariffs_info_block_text" onClick={() => this.clickOnTariffs.emit(this.arr.text)}>
          {this.arr.text}
        </div>
        <div class="Tariffs_info_price" onClick={() => this.clickOnTariffs.emit(this.arr.priceText)}>
          {this.arr.priceText}
        </div>
        <div class="Tariffs_info_btnBlock">
          <button class="Tariffs_info_btn" onClick={() => {
            this.clickOnTariffs.emit(this.arr.btnText);
            this.openForm.emit();
          }}>
            {this.arr.btnText}
          </button>
        </div>
      </div>
    );
  }
}


function blockClass(x) {
  switch (x) {
    case 'small':
      return 'Tariffs_info_block_small';

    case 'big':
      return 'Tariffs_info_block_big';
  }
}
