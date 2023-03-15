import { inject } from '@adonisjs/fold'
import ClientService from 'App/Services/ClientService'

@inject()
export default class ClientsController {
  constructor(protected clientService: ClientService) {}
  public async index() {
    return await this.clientService.getAllClients()
  }
}
