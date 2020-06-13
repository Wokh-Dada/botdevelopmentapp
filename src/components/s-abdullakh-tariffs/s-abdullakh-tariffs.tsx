import {Component, ComponentInterface, h} from '@stencil/core';

@Component({
  tag: 's-abdullakh-tariffs',
  styleUrl: 's-abdullakh-tariffs.css',
  shadow: false,
})
export class SAbdullakhTariffs implements ComponentInterface {

  render() {
    return (
      <section class="Tariffs_section">
        <div class="container">
          <div class="Tariffs_title">
            Тарифы
          </div>
          <div class="Tariffs_info_blocks">
            <div class="Tariffs_info_block">
              <div class="Tariffs_info_block_outer_icon"
                   style={{backgroundImage: "url(https://static.tildacdn.com/tild3433-3861-4062-a230-656534333436/Ellipse_11.svg)"}}>
                <div class="Tariffs_info_block_inner_icon"
                     style={{backgroundImage: "url(https://static.tildacdn.com/tild6237-3161-4162-b332-623865363564/boy_1.svg)"}}>

                </div>
              </div>
              <div class="Tariffs_info_block_title">
                Чат-бот визитка
              </div>
              <div class="Tariffs_info_block_text">
                Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых
                услугах.
              </div>
              <div class="Tariffs_info_price">
                узнайте стоимость
              </div>
              <div class="Tariffs_info_btnBlock">
                <button class="Tariffs_info_btn">
                  Заказать бота
                </button>
              </div>
            </div>
            <div class="Tariffs_info_block">
              <div class="Tariffs_info_block_icon"
                   style={{backgroundImage: "url(https://static.tildacdn.com/tild6237-3161-4162-b332-623865363564/boy_1.svg)"}}>

              </div>
              <div class="Tariffs_info_block_title">
                Чат-бот визитка
              </div>
              <div class="Tariffs_info_block_text">
                Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых
                услугах.
              </div>
              <div class="Tariffs_info_price">
                узнайте стоимость
              </div>
              <div class="Tariffs_info_btnBlock">
                <button class="Tariffs_info_btn">
                  Заказать бота
                </button>
              </div>
            </div>
            <div class="Tariffs_info_block">
              <div class="Tariffs_info_block_icon"
                   style={{backgroundImage: "url(https://static.tildacdn.com/tild6237-3161-4162-b332-623865363564/boy_1.svg)"}}>

              </div>
              <div class="Tariffs_info_block_title">
                Чат-бот визитка
              </div>
              <div class="Tariffs_info_block_text">
                Чат-бот который поможет вашим клиентам познакомится с вашим бизнесом, узнать информацию о оказываемых
                услугах.
              </div>
              <div class="Tariffs_info_price">
                узнайте стоимость
              </div>
              <div class="Tariffs_info_btnBlock">
                <button class="Tariffs_info_btn">
                  Заказать бота
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
