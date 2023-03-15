import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'

export default class Notification extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public message: string

  @column()
  public subscribed: string[]

  @column()
  public channels: string[]

  @column()
  public client_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //mutators
  @beforeSave()
  public static subscribed(notification: Notification) {
    if (notification.$dirty.subscribed) {
      notification.subscribed = JSON.stringify(notification.subscribed)
    }

    if (notification.$dirty.channels) {
      notification.channels = JSON.stringify(notification.channels)
    }
  }

  //relationships

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>
}
