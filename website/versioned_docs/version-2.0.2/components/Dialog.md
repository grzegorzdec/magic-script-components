---
id: dialog
title: Dialog
---

## Description

The Dialog is a container where you can place other UI components - such as layouts, buttons, or text - as child nodes.

## Example

```javascript
import React from "react";
import { View, Dialog, Text } from "magic-script-components";

export default class MyApp extends React.Component {
  state = {
    requestUserConfirmation: true,
    dismissNotification: false,
  };

  onDialogCancel = event => {
    console.log("User declined !");
    this.setState({
      requestUserConfirmation: false
    });
  };

  onDialogConfirm = event => {
    console.log("User confirmed !");
    this.setState({
      requestUserConfirmation: false,
      dismissNotification: true
    });
  };

  render() {
    const dialog = this.state.requestUserConfirmation
    ? ( <Dialog
        buttonType="text-with-icon"
        dialogType="dual-action"
        dialogLayout="wide"
        cancelIcon="close"
        cancelText="No"
        confirmIcon="check"
        confirmText="Yes"
        title="Please confirm:"
        text="Dismiss the notification ?"
        onCancel={this.onDialogCancel}
        onConfirm={this.onDialogConfirm}
      />)
    : undefined;

    const notification = this.state.dismissNotification
      ? undefined
      : (<Text key='notification' textSize={0.035} text='You have recieved message!' localPosition={[-0.175, 0.3, 0]} />);

    return (
      <View name='main-view'>
        <Text key='notification-center' textSize={0.05} text='Notification Center' localPosition={[-0.18, 0.4, 0]}/>
        {notification}
        {dialog}
      </View>
    );
  }
}
```

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name      | Type    | Default Value | Description                                                       |
| --------- | ------- | :-----------: | ----------------------------------------------------------------- |
| title     | string  |      n/a      | The dialog title text. Use an empty string to hide the title.     |
| text      | string  |      n/a      | The dialog message text. Use an empty string to hide the message. |
| type      | string  | `dual-action` | The type of dialog.                                               |
| layout    | string  |  `standard`   | The dialog layout preference.                                     |
| scrolling | boolean |    `false`    | Creates a new dialog with vertical scrolling content.             |

### Dialog Type options: [DialogType](../types/DialogType.md)

### DialogLayout options: [DialogLayout](../types/DialogLayout.md)

## Element Properties

| Name        | Type   | Description                                                                                                                                                                                                                                                                                       |
| :---------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| buttonType  | string | Sets the button type to use for the dialog.                                                                                                                                                                                                                                                       |
| cancelText  | string | Sets the UTF-8 encoded Cancel button text, default is `Cancel`.                                                                                                                                                                                                                                   |
| cancelIcon  | string | Sets the Confirm button icon.                                                                                                                                                                                                                                                                     |
| confirmText | string | Sets the UTF-8 encoded Confirm button text, default is `Confirm`.                                                                                                                                                                                                                                 |
| confirmIcon | string | Sets the Confirm button icon.                                                                                                                                                                                                                                                                     |
| expireTime  | number | Sets the expiration time for the dialog in seconds. For modeless timed dialogs, and optionally for other dialogs, a timer can be set that sends out the `onTimeExpired` event when the dialog time expires. The dialog does not destroy itself and must be handled by the caller using the event. |

### buttonType options: [ButtonType](../types/ButtonType.md)

### cancelIcon / confirmIcon options: [IconType](../types/IconType.md)
