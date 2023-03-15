import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateNotificationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    client_id: schema.number([rules.required(), rules.exists({ table: 'clients', column: 'id' })]),
    subscribed: schema.array().members(schema.enum(['sports', 'finance', 'movies'])),
    message: schema.string(),
  })

  public messages: CustomMessages = {}
}
