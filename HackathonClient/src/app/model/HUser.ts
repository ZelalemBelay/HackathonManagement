import { HTeamMember } from './HTeamMember';
import { Credential } from './Credential';

export class HUser{
    teamName: string;
    teamEmail: string;
    credential: Credential = new Credential();
    teamMembers: HTeamMember[] = new Array();
    role: string;
}