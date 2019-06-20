import { HEventConfiguration } from './HEventConfiguration';

export class HEvent {

    title: string;
    fromDate: string;
    toDate: string;
    prize: string;

    eventConfig: HEventConfiguration = new HEventConfiguration();
}