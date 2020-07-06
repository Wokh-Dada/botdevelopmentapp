# s-abdullakh-form-communication



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                         | Type                            | Default     |
| --------- | --------- | ----------------------------------- | ------------------------------- | ----------- |
| `payload` | --        | данные компонента FormCommunication | `AbdullakhBotFormCommunication` | `undefined` |


## Events

| Event       | Description                    | Type               |
| ----------- | ------------------------------ | ------------------ |
| `closeForm` | Закрытие модального окна формы | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cnt-flexy-view-abdullakh-bot-form-communication-1_01](../../..)

### Depends on

- [cnt-flexy-view-abdullakh-bot-form-close](./res/view/cnt-flexy-view-abdullakh-bot-form-close)
- [cnt-flexy-view-abdullakh-bot-form](./res/view/cnt-flexy-view-abdullakh-bot-form)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-bot-form-communication_ --> cnt-flexy-view-abdullakh-bot-form-close
  cnt-flexy-view-abdullakh-bot-form-communication_ --> cnt-flexy-view-abdullakh-bot-form
  cnt-flexy-view-abdullakh-bot-form --> cnt-flexy-view-abdullakh-bot-form-input
  cnt-flexy-view-abdullakh-bot-form-communication-1_01 --> cnt-flexy-view-abdullakh-bot-form-communication_
  style cnt-flexy-view-abdullakh-bot-form-communication_ fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
