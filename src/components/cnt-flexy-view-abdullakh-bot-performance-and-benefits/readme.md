# cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                                         | Type     | Default     |
| -------------- | ---------------- | ------------------------------------------------------------------- | -------- | ----------- |
| `pathToAssets` | `path-to-assets` |                                                                     | `string` | `undefined` |
| `payload`      | `payload`        | объект с массивами компонентов PerformanceInformation, BenefitsBots | `any`    | `undefined` |


## Events

| Event      | Description          | Type               |
| ---------- | -------------------- | ------------------ |
| `openForm` | открытие формы связи | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [cnt-flexy-view-abdullakh-bot-performance-and-benefits_](./res/view/cnt-flexy-view-abdullakh-bot-performance-and-benefits_)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01 --> cnt-flexy-view-abdullakh-bot-performance-and-benefits_
  cnt-flexy-view-abdullakh-bot-performance-and-benefits_ --> cnt-flexy-view-abdullakh-bot-performance-information
  cnt-flexy-view-abdullakh-bot-performance-and-benefits_ --> cnt-flexy-view-abdullakh-bot-benefits-bots
  cnt-flexy-view-abdullakh-bot-performance-information --> cnt-flexy-view-abdullakh-bot-performance-information-list
  cnt-flexy-view-abdullakh-bot-benefits-bots --> cnt-flexy-view-abdullakh-bot-benefits-bots-block
  my-component --> cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01
  style cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_01 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
