# s-abdullakh-product-presentation



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                          | Type                             | Default     |
| --------- | --------- | ---------------------------------------------------- | -------------------------------- | ----------- |
| `payload` | --        | массив для вывода элементов ProductPresentationTitle | `SSAbdullakhProductPresentation` | `undefined` |


## Events

| Event                        | Description                                      | Type               |
| ---------------------------- | ------------------------------------------------ | ------------------ |
| `clickOnProductPresentation` | клик по элементам компонента ProductPresentation | `CustomEvent<any>` |
| `openForm`                   | Вызов модального окна формы                      | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0](../../..)

### Depends on

- [s-abdullakh-product-presentation-img](./res/view/s-abdullakh-product-presentation-img)
- [s-abdullakh-product-presentation-title](./res/view/s-abdullakh-product-presentation-title)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-img
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-title
  s-abdullakh-product-presentation-title --> s-abdullakh-product-presentation-img
  cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0 --> cnt-flexy-view-bot-abdullakh-product-presentation
  style cnt-flexy-view-bot-abdullakh-product-presentation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
