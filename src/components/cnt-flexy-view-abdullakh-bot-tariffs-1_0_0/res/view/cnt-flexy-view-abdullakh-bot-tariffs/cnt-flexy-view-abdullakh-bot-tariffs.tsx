import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-tariffs',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-tariffs.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhTariffs implements ComponentInterface {
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
        {/*анимация*/}
        <div class="dinamicImg" style={{backgroundImage: "url(" + this.payload.dinamicImg + ")"}}
             onClick={() => this.clickOnTariffs.emit(this.payload.dinamicImg)}>
          {/*вывод из массива картинки*/}
        </div>
        <span class="dollar" onClick={() => this.clickOnTariffs.emit(this.payload.dinamicText)}>
          {this.payload.dinamicText}
        </span>
        {/*анимация*/}
        <div class="container">
          <div class="Tariffs_title" onClick={() => this.clickOnTariffs.emit(this.payload.title)}>
            {this.payload.title}
          </div>
          <div class="Tariffs_info_blocks_bckgrnd" style={{backgroundImage: "url(" + this.payload.bckgrndImg + ")"}}
               onClick={() => this.clickOnTariffs.emit(this.payload.bckgrndImg)}>
            <div class="Tariffs_info_blocks">
              <TariffsInfoBlocks arr={this.payload.infoBlock}/>
            </div>
          </div>
        </div>
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
      <s-abdullakh-tariffs-info-blocks arr={item}/>
    );
  })
}
