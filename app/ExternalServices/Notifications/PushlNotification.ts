import { NotificationInterface } from './types'
export default class PushNotification implements NotificationInterface {
  public send(data): void {
    console.log(data)
    //logic for sending push
  }
}
