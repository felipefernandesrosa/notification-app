import { NotificationInterface } from './types'
export default class EmailNotification implements NotificationInterface {
  public send(data): void {
    console.log(data)
    //logic for sending email
  }
}
