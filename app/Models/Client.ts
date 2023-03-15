import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Notification from 'App/Models/Notification'
import { NotificationChannel } from 'App/ExternalServices/Notifications/types'
export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public notification_channels: NotificationChannel[]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //relationships

  @hasMany(() => Notification)
  public notifications: HasMany<typeof Notification>

  //mutators
  @beforeSave()
  public static subscribed(client: Client) {
    if (client.$dirty.notification_channels) {
      client.notification_channels = JSON.stringify(client.notification_channels)
    }
  }
}
