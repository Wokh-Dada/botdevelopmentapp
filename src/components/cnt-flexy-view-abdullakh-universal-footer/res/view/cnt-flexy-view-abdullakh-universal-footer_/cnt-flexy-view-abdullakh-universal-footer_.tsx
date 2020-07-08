import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-universal-footer_',
  styleUrl: 'cnt-flexy-view-abdullakh-universal-footer_.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhUniversalFooter_ implements ComponentInterface {
  /**
   *
   */
  @Prop() footerIcons: any;

  render() {
    return (
      <footer class="container-fluid p-0 m-0">
        <div class="universal_down_horizon">
          <span class="systemButtons">
            <IconBlocks arr={this.footerIcons.systemButtons}/>
          </span>
          <span class="userButtons">
            <IconBlocks arr={this.footerIcons.userButtons}/>
          </span>
        </div>
      </footer>
    );
  }

}


/*
* компонентная функция для вывода иконок приложений
 */
const IconBlocks = (props) => {
  return props.arr.map((item) => {
    /*
    * для вывода уведомлений
     */
    let notification = () => {
      if (item.badges > 0) {
        return(
          <span class="counter">
           {item.badges}
        </span>
        );
      }
    }
    return (
      <div class="footerAppItem">
        <div class="counter_pos">
          {notification()}
        </div>

        <div class="footerIcon"
             style={{backgroundImage: "url(" + item.icon + ")"}}>
          {/*иконка приложения*/}
        </div>
        <div class="footerIconName">
          {item.name}
        </div>
      </div>
    );
  })
}
