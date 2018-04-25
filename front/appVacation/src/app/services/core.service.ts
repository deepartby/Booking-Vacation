export class CoreService {

    uri: string = 'http://localhost:8000/';
    httpOptions = {headers:{
        'Content-Type':'application/json'
      }
    };

    constructor() { }
}
