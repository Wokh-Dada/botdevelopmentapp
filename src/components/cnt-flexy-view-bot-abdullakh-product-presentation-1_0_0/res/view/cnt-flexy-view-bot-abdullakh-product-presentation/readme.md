# s-abdullakh-product-presentation



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute | Description                                          | Type                             | Default     |
| --------------------- | --------- | ---------------------------------------------------- | -------------------------------- | ----------- |
| `ProductPresentation` | --        | массив для вывода элементов ProductPresentationTitle | `SSAbdullakhProductPresentation` | `undefined` |


## Events

| Event                        | Description                                      | Type               |
| ---------------------------- | ------------------------------------------------ | ------------------ |
| `clickOnProductPresentation` | клик по элементам компонента ProductPresentation | `CustomEvent<any>` |
| `openForm`                   | Вызов модального окна формы                      | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../../../../my-component)

### Depends on

- [s-abdullakh-product-presentation-img](res/view/s-abdullakh-product-presentation-img)
- [s-abdullakh-product-presentation-title](res/view/s-abdullakh-product-presentation-title)

### Graph
```mermaid
graph TD;
  s-abdullakh-product-presentation --> s-abdullakh-product-presentation-img
  s-abdullakh-product-presentation --> s-abdullakh-product-presentation-title
  s-abdullakh-product-presentation-title --> s-abdullakh-product-presentation-img
  my-component --> s-abdullakh-product-presentation
  style s-abdullakh-product-presentation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
