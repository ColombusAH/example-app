import { Client } from './Client'
import { Event } from './Event'
import { Photographer } from './Photographer'
import { User } from './User'
  
interface EntityTypes  {
  Client: Client
    Event: Event
    Photographer: Photographer
    User: User
}
  
export { EntityTypes, Client, Event, Photographer, User }