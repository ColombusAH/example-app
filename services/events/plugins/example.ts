/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/events/count',{
    schema: {
      description: 'Get the count of events',
      response: {
        200: {
          type: 'object',
          properties: {
            eventsCount: { type: 'number' }
          }
        }
      }
    }
  },async (request, reply) => {
    const eventsCount = await   fastify.platformatic.entities.event .count();
    return { eventsCount };
  },)
  // fastify.decorate('example', 'foobar')
}
