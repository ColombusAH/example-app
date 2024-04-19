/**
 * Event
 * A Event
 */
declare interface Event {
    id?: string;
    clientId?: number | null;
    date: string;
    location?: string | null;
    title: string;
}
export { Event };
