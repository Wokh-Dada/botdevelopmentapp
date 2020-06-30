# cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                          | Type  | Default     |
| --------- | --------- | ---------------------------------------------------- | ----- | ----------- |
| `payload` | `payload` | массив для вывода элементов ProductPresentationTitle | `any` | `undefined` |


## Events

| Event      | Description                 | Type               |
| ---------- | --------------------------- | ------------------ |
| `openForm` | Вызов модального окна формы | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [cnt-flexy-view-bot-abdullakh-product-presentation](res/view/cnt-flexy-view-abdullakh-bot-product-presentation)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0 --> cnt-flexy-view-bot-abdullakh-product-presentation
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-img
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-title
  s-abdullakh-product-presentation-title --> s-abdullakh-product-presentation-img
  my-component --> cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0
  style cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
