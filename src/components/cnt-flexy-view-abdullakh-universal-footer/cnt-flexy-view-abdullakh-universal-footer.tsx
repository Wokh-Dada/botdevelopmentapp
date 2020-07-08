import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhBot} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-universal-footer-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-universal-footer.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhUniversalFooter implements ComponentInterface {
  /**
   * принятые данные для вывода в компоненте футер
   * */
  @Prop() categories: any;

  /**
   * префикс путь к картинкам
   * */
  @Prop() pathToAssets: string;

  /**
   * присваивание переданного пути общей переменной для вызова в любом месте
   * */
  componentWillLoad() {
    StorageAbdullakhBot.prefix = this.pathToAssets;
  }

  render() {
    return (
      <cnt-flexy-view-abdullakh-universal-footer_ footerIcons={this.categories}/>
    );
  }
}
