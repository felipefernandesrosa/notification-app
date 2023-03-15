import { NotificationInterface } from './types'
export default class SmsNotification implements NotificationInterface {
  public send(data): void {
    console.log(data)
    //logic for sending sms
  }
}
