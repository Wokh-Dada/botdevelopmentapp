import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-abdullakh-transition-create-bot-title',
  styleUrl: 's-abdullakh-transition-create-bot-title.css',
  shadow: false,
})
export class SAbdullakhTransitionCreateBotTitle implements ComponentInterface {
  /**
   * массив для вывода элементов подкомпонента TransitionCreateBotTitle компонента TransitionCreateBot
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnTransitionCreateBot: EventEmitter;

  /**
   * переменная для observe функции скрола
   * */
  observer: IntersectionObserver;

  /**
   * ref для подключения к родительскому блоку картинки
   * */
  creatBotParent: HTMLElement;

  /**
   * ref для подключения к картинке
   * */
  creatBotImg: HTMLElement;

  render() {
    /**
     * вызов функции анимации блока transitionCreateBotImg при скроле
     * */
    return (
      <div class="transitionCreateBotImgPosition" ref={(el) => this.creatBotParent = el}>
        <div class="transitionCreateBotImg"
             id="transitionCreateBotImg"
             style={{backgroundImage: "url(" + this.arr.imgUrl + ")"}}
             onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.imgUrl)}
             ref={(el) => this.creatBotImg = el}
        >
          {/*вызов картинки из массива*/}
        </div>
        <div class="transitionCreateBotTitleBlock">
          <div class="transitionCreateBotTitle"
               innerHTML={this.arr.title}
               onClick={() => this.clickOnTransitionCreateBot.emit(this.arr.title)}>
            {/*вызов html разметки из массива*/}
          </div>
        </div>
      </div>
    );
  }

  componentDidLoad() {
    this.initAnimation();
  }

  disconnectedCallback() {
    this.observer && this.observer.observe
  }

  /**
   * функция для движения картинки во время скрола
   * */
  private initAnimation(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [
        0.1, 0.15,
        0.2, 0.25,
        0.3, 0.35,
        0.4, 0.45,
        0.5, 0.55,
        0.6, 0.65,
        0.7, 0.75,
        0.8, 0.85,
        0.9, 0.95,
        1
      ],
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const intersectionRatio = entries[0].intersectionRatio,
            top = entries[0].boundingClientRect.top,
            transformX = 120 - (120 * intersectionRatio);
      if (top > 0){
        return this.creatBotImg.style.transform = `translateX(-${transformX}%)`;
      }
    };
    this.observer = new IntersectionObserver(callback, options);
    this.observer.observe(this.creatBotParent);
  };
}
