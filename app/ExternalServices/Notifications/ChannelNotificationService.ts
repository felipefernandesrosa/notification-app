import { NotificationInterface, NotificationData, NotificationChannel } from './types'
import EmailNotification from 'App/ExternalServices/Notifications/EmailNotification'
import SmsNotification from 'App/ExternalServices/Notifications/SmsNotification'
import PushNotification from 'App/ExternalServices/Notifications/PushlNotification'

export default class ChannelNotificationService {
  private _channelMapping: { [channel in NotificationChannel]: NotificationInterface } = {
    email: new EmailNotification(),
    sms: new SmsNotification(),
    push: new PushNotification(),
  }
  private readonly _sendChannels: NotificationChannel[]
  private readonly data: NotificationData
  constructor(channels: NotificationChannel[], data: NotificationData) {
    this._sendChannels = channels
    this.data = data
  }

  public send() {
    for (const channel of this._sendChannels) {
      this._channelMapping[channel].send(this.data)
    }
  }
}
