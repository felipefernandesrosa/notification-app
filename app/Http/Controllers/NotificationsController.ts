import { inject } from '@adonisjs/fold'
import NotificationService from 'App/Services/NotificationService'
import CreateNotificationValidator from 'App/Validators/Notification/CreateNotificationValidator'

@inject()
export default class NotificationsControllerController {
  constructor(protected notificationService: NotificationService) {}
  public async index() {
    return await this.notificationService.getAllNotifications()
  }

  public async createNotification({ request }) {
    const payload = await request.validate(CreateNotificationValidator)
    return await this.notificationService.createNotification(payload)
  }
}
