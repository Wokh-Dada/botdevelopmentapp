# cnt-flexy-view-abdullakh-bot-form-communication-1_0_0



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                         | Type     | Default     |
| -------------- | ---------------- | ----------------------------------- | -------- | ----------- |
| `pathToAssets` | `path-to-assets` |                                     | `string` | `undefined` |
| `payload`      | `payload`        | данные компонента FormCommunication | `any`    | `undefined` |


## Events

| Event       | Description                    | Type               |
| ----------- | ------------------------------ | ------------------ |
| `closeForm` | Закрытие модального окна формы | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [cnt-flexy-view-abdullakh-bot-form-communication](./res/view/cnt-flexy-view-abdullakh-bot-form-communication)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-form-communication-1_0_0 --> cnt-flexy-view-abdullakh-bot-form-communication
  cnt-flexy-view-abdullakh-bot-form-communication --> cnt-flexy-view-abdullakh-bot-form-close
  cnt-flexy-view-abdullakh-bot-form-communication --> cnt-flexy-view-abdullakh-bot-form
  cnt-flexy-view-abdullakh-bot-form --> cnt-flexy-view-abdullakh-bot-form-input
  my-component --> cnt-flexy-view-abdullakh-bot-form-communication-1_0_0
  style cnt-flexy-view-abdullakh-bot-form-communication-1_0_0 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*