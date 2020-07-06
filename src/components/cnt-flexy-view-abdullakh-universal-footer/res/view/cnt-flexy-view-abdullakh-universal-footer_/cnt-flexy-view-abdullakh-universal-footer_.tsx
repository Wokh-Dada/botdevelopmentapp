import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-universal-footer_',
  styleUrl: 'cnt-flexy-view-abdullakh-universal-footer_.css',
  shadow: false,
})
export class CntFlexyViewAbdullakhUniversalFooter_ implements ComponentInterface {
  @Prop() footerIcons: any;

  render() {
    return (
      <footer class="container-fluid p-0 m-0">
        <div class="universal_down_horizon">
          <IconBlocks arr={this.footerIcons.icons} />
        </div>
      </footer>
    );
  }

}



/*
* компонентная функция для вывода элементов news-main-block
 */
const IconBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="footerAppItem">
        <div class="footerIcon"
             style={{backgroundImage: "url("+ item.iconHref +")"}}>
          {/*иконка приложения*/}
        </div>
        <div class="footerIconName">
          {item.iconName}
        </div>
      </div>
    );
  })
}
