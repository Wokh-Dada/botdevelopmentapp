# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [cnt-flexy-view-abdullakh-bot-form-communication-1_0_0](../cnt-flexy-view-abdullakh-bot-form-communication-1_0_0)
- [cnt-flexy-view-bot-abdullakh-header-1_0_0](../cnt-flexy-view-abdullakh-bot-header-1_0_0)
- [cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0](../cnt-flexy-view-abdullakh-bot-product-presentation-1_0_0)
- [cnt-flexy-view-abdullakh-bot-product-information-1_0_0](../cnt-flexy-view-abdullakh-bot-product-information-1_0_0)
- [cnt-flexy-view-abdullakh-bot-transition-create-bot-1_0_0](../cnt-flexy-view-abdullakh-bot-transition-create-bot-1_0_0)
- [cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0](../cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0)
- [cnt-flexy-view-abdullakh-bot-consultation-1_0_0](../cnt-flexy-view-abdullakh-bot-consultation-1_0_0)
- [cnt-flexy-view-abdullakh-bot-tariffs-1_0_0](../cnt-flexy-view-abdullakh-bot-tariffs-1_0_0)

### Graph
```mermaid
graph TD;
  my-component --> cnt-flexy-view-abdullakh-bot-form-communication-1_0_0
  my-component --> cnt-flexy-view-bot-abdullakh-header-1_0_0
  my-component --> cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0
  my-component --> cnt-flexy-view-abdullakh-bot-product-information-1_0_0
  my-component --> cnt-flexy-view-abdullakh-bot-transition-create-bot-1_0_0
  my-component --> cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0
  my-component --> cnt-flexy-view-abdullakh-bot-consultation-1_0_0
  my-component --> cnt-flexy-view-abdullakh-bot-tariffs-1_0_0
  cnt-flexy-view-abdullakh-bot-form-communication-1_0_0 --> cnt-flexy-view-bot-abdullakh-form-communication
  cnt-flexy-view-bot-abdullakh-form-communication --> s-abdullakh-form-close
  cnt-flexy-view-bot-abdullakh-form-communication --> s-abdullakh-form
  cnt-flexy-view-bot-abdullakh-header-1_0_0 --> cnt-flexy-view-bot-abdullakh-header
  cnt-flexy-view-bot-abdullakh-header --> s-abdullakh-header-start
  cnt-flexy-view-bot-abdullakh-header --> s-abdullakh-header-end
  cnt-flexy-view-bot-abdullakh-header --> s-abdullakh-header-center
  cnt-flexy-view-bot-abdullakh-product-presentation-1_0_0 --> cnt-flexy-view-bot-abdullakh-product-presentation
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-img
  cnt-flexy-view-bot-abdullakh-product-presentation --> s-abdullakh-product-presentation-title
  s-abdullakh-product-presentation-title --> s-abdullakh-product-presentation-img
  cnt-flexy-view-abdullakh-bot-product-information-1_0_0 --> cnt-flexy-view-abdullakh-bot-product-information
  cnt-flexy-view-abdullakh-bot-product-information --> cnt-flexy-view-abdullakh-bot-product-information-blocks
  cnt-flexy-view-abdullakh-bot-transition-create-bot-1_0_0 --> cnt-flexy-view-abdullakh-bot-transition-create-bot
  cnt-flexy-view-abdullakh-bot-transition-create-bot --> s-abdullakh-transition-create-bot-title
  cnt-flexy-view-abdullakh-bot-transition-create-bot --> s-abdullakh-transition-create-bot-follow
  cnt-flexy-view-abdullakh-bot-performance-and-benefits-1_0_0 --> cnt-flexy-view-abdullakh-bot-performance-and-benefits
  cnt-flexy-view-abdullakh-bot-performance-and-benefits --> s-abdullakh-performance-information
  cnt-flexy-view-abdullakh-bot-performance-and-benefits --> s-abdullakh-benefits-bots
  s-abdullakh-performance-information --> s-abdullakh-performance-information-list
  s-abdullakh-benefits-bots --> s-abdullakh-benefits-bots-block
  cnt-flexy-view-abdullakh-bot-consultation-1_0_0 --> cnt-flexy-view-abdullakh-bot-consultation
  cnt-flexy-view-abdullakh-bot-tariffs-1_0_0 --> cnt-flexy-view-abdullakh-bot-tariffs
  cnt-flexy-view-abdullakh-bot-tariffs --> s-abdullakh-tariffs-info-blocks
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
