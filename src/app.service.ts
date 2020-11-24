import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  private appConstatnts = {
    tetsConstant: '123132',  // TODO: change constant and add new app constant
    helloWorld: 'Hello World!'
  }

  getConstants(): any {
    return this.appConstatnts;
  }
}
