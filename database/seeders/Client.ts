import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Client from 'App/Models/Client'

export default class extends BaseSeeder {
  public async run() {
    await Client.createMany([
      {
        name: 'Felipe Fernandes',
        email: 'felipe@adonisjs.com',
        phone: '21 991906611',
        notification_channels: ['push', 'email', 'sms'],
      },
      {
        name: 'John Doe',
        email: 'john@adonisjs.com',
        phone: '11 911006111',
        notification_channels: ['push', 'email'],
      },
      {
        name: 'Romain',
        email: 'romain@adonisjs.com',
        phone: '31 921006271',
        notification_channels: ['push'],
      },
    ])
  }
}
