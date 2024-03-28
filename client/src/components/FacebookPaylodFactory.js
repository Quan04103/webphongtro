import PayloadFactory from './PayloadFactory';

export class FacebookPayloadFactory extends PayloadFactory {
    createPayload(tkfacebook) {
      return {
        tkfacebook
      };
    }
  }