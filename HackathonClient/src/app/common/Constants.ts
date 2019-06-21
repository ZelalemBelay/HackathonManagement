export class Constants {
    static SERVER_ADDRESS = "http://localhost:3001";

    static REGISTRATION_API = Constants.SERVER_ADDRESS + '/hUser/register';
    static AUTH_API = Constants.SERVER_ADDRESS + '/login';
    static HEVENT_INSERT_API: string = Constants.SERVER_ADDRESS + '/hEvent/insert';
    static HEVENT_FETCH_API: string = Constants.SERVER_ADDRESS + '/hEvent/all';
    static HUSER_FETCH_API: string = Constants.SERVER_ADDRESS + '/hUsers/all/';
    static EVALUATION_FORM_API = Constants.SERVER_ADDRESS + '/evaluation/insert';
    static IMAGES: any = [
        "https://wi-images.condecdn.net/image/mprkxvalzk4/crop/405/landscape/f/141213_web.jpg",
        "https://wi-images.condecdn.net/image/mprkxvalzk4/crop/405/landscape/f/141213_web.jpg",
        "https://storage.googleapis.com/kaggle-organizations/1623/thumbnail.png?r=141"


    ];
    constructor() {
    }
}