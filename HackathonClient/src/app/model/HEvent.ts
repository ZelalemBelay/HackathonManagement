import { HEventConfiguration } from './HEventConfiguration';
import { HUser } from './HUser';

export class HEvent {

    eventId: string;
    title: string;
    fromDate: string;
    toDate: string;
    prize: string;
    assignedHost: string;
    assignedEvaluator: string;

    eventConfig: HEventConfiguration = new HEventConfiguration();
}