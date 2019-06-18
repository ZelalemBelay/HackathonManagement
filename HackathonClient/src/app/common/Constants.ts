export class Constants {
    static SERVER_ADDRESS = "http://localhost:3001";
    static HPARTICIPANT_REG_API = Constants.SERVER_ADDRESS + '/hParticipant/insert';
    static AUTH_API = Constants.SERVER_ADDRESS + '/user/login';

    constructor (){
    }
}