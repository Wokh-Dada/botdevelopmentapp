import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-bot-form-input',
  styleUrl: 'cnt-flexy-view-abdullakh-bot-form-input.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhBotFormInput implements ComponentInterface {

  @Prop() phoneMask: any;

  /**
   * boolean значение для вывода компонента form-communication
   */
  @State() idCountry: string;

  navOpenTag: HTMLElement;
  componentDidLoad() {
    this.idCountry = this.phoneMask.defaultNumber;
  }

  render() {

    return (
      <div>
        <div class="form_text">
          {this.phoneMask.numberInterview}
        </div>
        <div>
          <div class="inputSize">
            <div class="numberSelect">
              <div onClick={() => this.toggleMobileMenu()}>
                <CountryCodeSelected arr={this.phoneMask.phonemask} idCountry={this.idCountry}/>
              </div>
              <input class="inputSizePhone" type="tel" placeholder="(999) 999-99-99"/>
            </div>
          </div>
          <div class="d-none" ref={(el) => this.navOpenTag = el}>
            <div class="country_code_selection">

              <CountryCodeSelection arr={this.phoneMask.phonemask} idSelected={(x) => this.idSelected(x)}/>

            </div>
          </div>
        </div>
      </div>
    );

  }

  /**
   * функция для открытия блока с странами
   * */
  public toggleMobileMenu() {
    if (this.navOpenTag.className === "d-none") {
      this.navOpenTag.className = 'd-flex';
    }
  }

  /**
   * функция для присвоения id выбранной страны
   * */
  public idSelected(x) {
    this.idCountry = x
    this.navOpenTag.className = 'd-none';
  }

}

/**
* компонентная функция для вывода флага и кода выбранной страны
 **/
const CountryCodeSelection = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="country_code_selection_item" id={item.id} onClick={() => props.idSelected(item.id)}>
        <div class="country_name">
          {item.country}
        </div>
        <span class="country_code">
          {item.countryNumber}
        </span>
        <span class="country_flag"
              style={{
                backgroundImage: "url(" + item.flag + ")",
                backgroundPosition: `${item.flagPosition}`
              }}>
        </span>
      </div>
    );
  })
}

/**
* компонентная функция для вывода кода и флага выбранной страны
 **/
const CountryCodeSelected = (props) => {
  return props.arr.map((item) => {
    if (props.idCountry === item.id) {
      return (
        <div class="country_select">
          <span class="phoneMaskFlag" style={{
            backgroundImage: "url(" + item.flag + ")",
            backgroundPosition: `${item.flagPosition}`
          }}>

          </span>
          <span class="phoneMaskIcon">

          </span>
          <span class="phoneMaskNumber">
            {item.countryNumber}
          </span>
        </div>
      );
    }
  })
}
