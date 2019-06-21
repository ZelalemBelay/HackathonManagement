import { HEventConfiguration } from './HEventConfiguration';
import { HUser } from './HUser';

export class HEvent {

    title: string;
    fromDate: string;
    toDate: string;
    prize: string;
    assignedHost: string;
    assignedEvaluator: string;

    eventConfig: HEventConfiguration = new HEventConfiguration();
}