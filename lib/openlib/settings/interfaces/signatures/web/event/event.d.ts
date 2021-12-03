import { Events } from '../../../../enums/signatures/web/events/events';
export interface IEvent {
    type: Events;
    payload: any;
}
