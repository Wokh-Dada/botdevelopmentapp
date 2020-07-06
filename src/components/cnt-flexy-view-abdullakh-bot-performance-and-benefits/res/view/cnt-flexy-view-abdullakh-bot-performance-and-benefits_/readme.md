# s-abdullakh-performance-and-benefits



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                         | Type  | Default     |
| --------- | --------- | ------------------------------------------------------------------- | ----- | ----------- |
| `payload` | `payload` | объект с массивами компонентов PerformanceInformation, BenefitsBots | `any` | `undefined` |


## Events

| Event                           | Description                                         | Type               |
| ------------------------------- | --------------------------------------------------- | ------------------ |
| `clickOnPerformanceAndBenefits` | клик по элементам компонента PerformanceAndBenefits | `CustomEvent<any>` |
| `openForm`                      | открытие формы связи                                | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0](../../..)

### Depends on

- [cnt-flexy-view-abdullakh-bot-performance-information](./res/view/cnt-flexy-view-abdullakh-bot-performance-information)
- [cnt-flexy-view-abdullakh-bot-benefits-bots](./res/view/cnt-flexy-view-abdullakh-bot-benefits-bots)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-performance-and-benefits --> cnt-flexy-view-abdullakh-bot-performance-information
  cnt-flexy-view-abdullakh-bot-performance-and-benefits --> cnt-flexy-view-abdullakh-bot-benefits-bots
  cnt-flexy-view-abdullakh-bot-performance-information --> cnt-flexy-view-abdullakh-bot-performance-information-list
  cnt-flexy-view-abdullakh-bot-benefits-bots --> cnt-flexy-view-abdullakh-bot-benefits-bots-block
  cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0 --> cnt-flexy-view-abdullakh-bot-performance-and-benefits
  style cnt-flexy-view-abdullakh-bot-performance-and-benefits fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
