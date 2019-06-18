import { HTeamMember } from './HTeamMember';
import { Credential } from './Credential';

export class HParticipant{
    teamName: string;
    teamEmail: string;
    credential: Credential;
    teamMembers: HTeamMember[] = new Array();
}