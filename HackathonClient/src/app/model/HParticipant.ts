import { HTeamMember } from './HTeamMember';

export class HParticipant{
    teamName: string;
    teamEmail: string;
    teamMembers: HTeamMember[] = new Array();
}