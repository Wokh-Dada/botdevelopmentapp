# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [s-abdullakh-form-communication](../s-abdullakh-form-communication)
- [s-abdullakh-header](../s-abdullakh-header)
- [s-abdullakh-product-presentation](../s-abdullakh-product-presentation)
- [s-abdullakh-product-information](../s-abdullakh-product-information)
- [s-abdullakh-transition-create-bot](../s-abdullakh-transition-create-bot)
- [s-abdullakh-performance-and-benefits](../s-abdullakh-performance-and-benefits)
- [s-abdullakh-consultation](../s-abdullakh-consultation)
- [s-abdullakh-tariffs](../s-abdullakh-tariffs)

### Graph
```mermaid
graph TD;
  my-component --> s-abdullakh-form-communication
  my-component --> s-abdullakh-header
  my-component --> s-abdullakh-product-presentation
  my-component --> s-abdullakh-product-information
  my-component --> s-abdullakh-transition-create-bot
  my-component --> s-abdullakh-performance-and-benefits
  my-component --> s-abdullakh-consultation
  my-component --> s-abdullakh-tariffs
  s-abdullakh-form-communication --> s-abdullakh-form-close
  s-abdullakh-form-communication --> s-abdullakh-form
  s-abdullakh-header --> s-abdullakh-header-start
  s-abdullakh-header --> s-abdullakh-header-end
  s-abdullakh-header --> s-abdullakh-header-center
  s-abdullakh-product-presentation --> s-abdullakh-product-presentation-img
  s-abdullakh-product-presentation --> s-abdullakh-product-presentation-title
  s-abdullakh-product-presentation-title --> s-abdullakh-product-presentation-img
  s-abdullakh-product-information --> s-abdullakh-product-information-blocks
  s-abdullakh-transition-create-bot --> s-abdullakh-transition-create-bot-title
  s-abdullakh-transition-create-bot --> s-abdullakh-transition-create-bot-follow
  s-abdullakh-performance-and-benefits --> s-abdullakh-performance-information
  s-abdullakh-performance-and-benefits --> s-abdullakh-benefits-bots
  s-abdullakh-performance-information --> s-abdullakh-performance-information-list
  s-abdullakh-benefits-bots --> s-abdullakh-benefits-bots-block
  s-abdullakh-tariffs --> s-abdullakh-tariffs-info-blocks
  style my-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
