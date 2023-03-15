export type NotificationChannel = 'email' | 'push' | 'sms'

export type NotificationData = {
  message: string
  client_name: string
}

export interface NotificationInterface {
  send: (data: NotificationData) => void
}
