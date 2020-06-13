import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-header',
  styleUrl: 's-abdullakh-header.css',
  shadow: false,
})
export class SAbdullakhHeader implements ComponentInterface {
  /**
   * массив меню
   * */
  @Prop() header: any;

  render() {

    return (
      <header>
        <div class="container mt-2">
          <div class="row">
            <div class="col-3">
              <s-abdullakh-header-start arr={this.header} />
            </div>
            <div class="col-6">
              <nav class="my_navbar">
                <ItemLink arr={this.header.menu}/>
              </nav>
            </div>
            <div class="col-3">
              <s-abdullakh-header-end arr={this.header}/>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

/*
* компонентная функция для вывода элементов меню
 */
const ItemLink = (props) => {
  return props.arr.map((item) => {
    return (
      <s-abdullakh-header-center arr={item}/>
    );
  })
}

