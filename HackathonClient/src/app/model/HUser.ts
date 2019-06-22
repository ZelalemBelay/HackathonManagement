import { HTeamMember } from './HTeamMember';
import { Credential } from './Credential';
import { Idea } from './Idea';

export class HUser{
    teamName: string;
    teamEmail: string;
    credential: Credential = new Credential();
    teamMembers: HTeamMember[] = new Array();
    role: string;
    idea: Idea = new Idea();
    status: string;
    registeredEvent: string;
}