import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-tariffs',
  styleUrl: 's-abdullakh-tariffs.css',
  shadow: false,
})
export class SAbdullakhTariffs implements ComponentInterface {
  /**
   * данные компонента Tariffs
   * */
  @Prop() Tariffs: any;

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
        <div class="dinamicImg" style={{backgroundImage: "url(" + this.Tariffs.dinamicImg + ")"}}
             onClick={() => this.clickOnTariffs.emit(this.Tariffs.dinamicImg)}>
          {/*вывод из массива картинки*/}
        </div>
        <span class="dollar" onClick={() => this.clickOnTariffs.emit(this.Tariffs.dinamicText)}>
          {this.Tariffs.dinamicText}
        </span>
        {/*анимация*/}
        <div class="container">
          <div class="Tariffs_title" onClick={() => this.clickOnTariffs.emit(this.Tariffs.title)}>
            {this.Tariffs.title}
          </div>
          <div class="Tariffs_info_blocks_bckgrnd" style={{backgroundImage: "url(" + this.Tariffs.bckgrndImg + ")"}}
               onClick={() => this.clickOnTariffs.emit(this.Tariffs.bckgrndImg)}>
            <div class="Tariffs_info_blocks">
              <TariffsInfoBlocks arr={this.Tariffs.infoBlock}/>
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
