import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-tariffs_',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-tariffs_.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhBotTariffs_ implements ComponentInterface {
  /**
   * данные компонента Tariffs
   * */
  @Prop() payload: any;

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
      <section class="Tariffs_section">
        <div class="Tariffs_info_blocks_bckgrnd_position">
          <div class="Tariffs_info_blocks_bckgrnd"
               style={{backgroundImage: "url(" + StorageAbdullakhBot.prefix + this.payload.bckgrndImg + ")"}}
               onClick={() => this.clickOnTariffs.emit(this.payload.bckgrndImg)}>

          </div>
        </div>
        {/************************************************************************************************************************************/}
        <div class="container realitive">
          <div class="Tariffs_title" onClick={() => this.clickOnTariffs.emit(this.payload.title)}>
            {this.payload.title}
          </div>
          <div class="Tariffs_info_blocks">
            <TariffsInfoBlocks arr={this.payload.infoBlock}/>
          </div>
        </div>
        {/*анимация*/}
        <div class="animation_bock">
          <div class="dinamicImg"
               style={{backgroundImage: "url(" + StorageAbdullakhBot.prefix + this.payload.dinamicImg + ")"}}
               onClick={() => this.clickOnTariffs.emit(this.payload.dinamicImg)}>
            {/*вывод из массива картинки */}
          </div>
          <span class="dollar" onClick={() => this.clickOnTariffs.emit(this.payload.dinamicText)}>
          {this.payload.dinamicText}
        </span>
        </div>
        {/*анимация*/}
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов news-main-block
 */
const TariffsInfoBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-bot-tariffs-info-blocks arr={item}/>
    );
  })
}
