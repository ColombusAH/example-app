import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Client,Event,Photographer,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Client' | 'Event' | 'Photographer' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  client: Entity<Client>,
    event: Entity<Event>,
    photographer: Entity<Photographer>,
    user: Entity<User>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'client', hooks: EntityHooks<Client>): any
    addEntityHooks(entityName: 'event', hooks: EntityHooks<Event>): any
    addEntityHooks(entityName: 'photographer', hooks: EntityHooks<Photographer>): any
    addEntityHooks(entityName: 'user', hooks: EntityHooks<User>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
