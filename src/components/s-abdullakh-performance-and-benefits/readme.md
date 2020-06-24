# s-abdullakh-performance-and-benefits



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                         | Type  | Default     |
| ------------------------ | -------------------------- | ------------------------------------------------------------------- | ----- | ----------- |
| `PerformanceAndBenefits` | `performance-and-benefits` | объект с массивами компонентов PerformanceInformation, BenefitsBots | `any` | `undefined` |


## Events

| Event                           | Description                                         | Type               |
| ------------------------------- | --------------------------------------------------- | ------------------ |
| `clickOnPerformanceAndBenefits` | клик по элементам компонента PerformanceAndBenefits | `CustomEvent<any>` |
| `openForm`                      | открытие формы связи                                | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [s-abdullakh-performance-information](./res/view/s-abdullakh-performance-information)
- [s-abdullakh-benefits-bots](./res/view/s-abdullakh-benefits-bots)

### Graph
```mermaid
graph TD;
  s-abdullakh-performance-and-benefits --> s-abdullakh-performance-information
  s-abdullakh-performance-and-benefits --> s-abdullakh-benefits-bots
  s-abdullakh-performance-information --> s-abdullakh-performance-information-list
  s-abdullakh-benefits-bots --> s-abdullakh-benefits-bots-block
  my-component --> s-abdullakh-performance-and-benefits
  style s-abdullakh-performance-and-benefits fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
