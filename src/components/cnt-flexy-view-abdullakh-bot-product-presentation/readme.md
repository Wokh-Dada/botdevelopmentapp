# cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                          | Type     | Default     |
| -------------- | ---------------- | ---------------------------------------------------- | -------- | ----------- |
| `pathToAssets` | `path-to-assets` | префикс путь к картинкам                             | `string` | `undefined` |
| `payload`      | `payload`        | массив для вывода элементов ProductPresentationTitle | `any`    | `undefined` |


## Events

| Event      | Description                 | Type               |
| ---------- | --------------------------- | ------------------ |
| `openForm` | Вызов модального окна формы | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [cnt-flexy-view-abdullakh-bot-product-presentation_](./res/view/cnt-flexy-view-abdullakh-bot-product-presentation_)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-product-presentation-1_01 --> cnt-flexy-view-abdullakh-bot-product-presentation_
  cnt-flexy-view-abdullakh-bot-product-presentation_ --> cnt-flexy-view-abdullakh-bot-product-presentation-img
  cnt-flexy-view-abdullakh-bot-product-presentation_ --> cnt-flexy-view-abdullakh-bot-product-presentation-title
  cnt-flexy-view-abdullakh-bot-product-presentation-title --> cnt-flexy-view-abdullakh-bot-product-presentation-img
  my-component --> cnt-flexy-view-abdullakh-bot-product-presentation-1_01
  style cnt-flexy-view-abdullakh-bot-product-presentation-1_01 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
