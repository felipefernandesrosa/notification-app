import ClientServiceInterface from 'Contracts/Interfaces/ClientServiceInterface'
import Client from 'App/Models/Client'

export default class ClientService implements ClientServiceInterface {

  public getAllClients() {
    return Client.all()
  }
}
