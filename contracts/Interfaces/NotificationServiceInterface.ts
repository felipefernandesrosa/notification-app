import Notification from "App/Models/Notification";

export default interface NotificationServiceInterface {
  getAllNotifications(): void
  createNotification(params: []): Promise<Notification>
}
