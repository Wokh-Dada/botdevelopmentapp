# s-abdullakh-form-communication



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                         | Type  | Default     |
| ------------------- | -------------------- | ----------------------------------- | ----- | ----------- |
| `formCommunication` | `form-communication` | данные компонента FormCommunication | `any` | `undefined` |


## Events

| Event       | Description                    | Type               |
| ----------- | ------------------------------ | ------------------ |
| `closeForm` | Закрытие модального окна формы | `CustomEvent<any>` |


## Dependencies

### Used by

 - [my-component](../../../../my-component)

### Depends on

- [s-abdullakh-form-close](res/view/s-abdullakh-form-close)
- [s-abdullakh-form](res/view/s-abdullakh-form-form)

### Graph
```mermaid
graph TD;
  s-abdullakh-form-communication --> s-abdullakh-form-close
  s-abdullakh-form-communication --> s-abdullakh-form
  my-component --> s-abdullakh-form-communication
  style s-abdullakh-form-communication fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
