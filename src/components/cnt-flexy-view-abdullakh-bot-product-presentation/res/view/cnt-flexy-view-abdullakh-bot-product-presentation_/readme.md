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

 - [cnt-flexy-view-abdullakh-bot-product-presentation-1_01](../../..)

### Depends on

- [cnt-flexy-view-abdullakh-bot-product-presentation-img](./res/view/cnt-flexy-view-abdullakh-bot-product-presentation-img)
- [cnt-flexy-view-abdullakh-bot-product-presentation-title](./res/view/cnt-flexy-view-abdullakh-bot-product-presentation-title)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-product-presentation_ --> cnt-flexy-view-abdullakh-bot-product-presentation-img
  cnt-flexy-view-abdullakh-bot-product-presentation_ --> cnt-flexy-view-abdullakh-bot-product-presentation-title
  cnt-flexy-view-abdullakh-bot-product-presentation-title --> cnt-flexy-view-abdullakh-bot-product-presentation-img
  cnt-flexy-view-abdullakh-bot-product-presentation-1_01 --> cnt-flexy-view-abdullakh-bot-product-presentation_
  style cnt-flexy-view-abdullakh-bot-product-presentation_ fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
