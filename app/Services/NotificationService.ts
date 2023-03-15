import Notification from 'App/Models/Notification'
import Client from 'App/Models/Client'
import NotificationServiceInterface from 'Contracts/Interfaces/NotificationServiceInterface'
import ChannelNotificationService from 'App/ExternalServices/Notifications/ChannelNotificationService'
import { NotificationChannel, NotificationData } from 'App/ExternalServices/Notifications/types'

interface CreateNotificationdata {
  client_id: string
  notification_channels: NotificationChannel[]
  data: NotificationData
}

export default class NotificationService implements NotificationServiceInterface {
  public getAllNotifications() {
    return Notification.all()
  }

  public async createNotification(params: CreateNotificationdata): Promise<Notification> {
    const client = await Client.find(params.client_id)

    if (client) {
      new ChannelNotificationService(client.notification_channels, params).send()
      return await Notification.create({ ...params, channels: client.notification_channels })
    }
  }
}
