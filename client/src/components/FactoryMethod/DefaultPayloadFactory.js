import PayloadFactory from './PayloadFactory';

export class DefaultPayloadFactory extends PayloadFactory {
    createPayload(phone, password) {
      return {
        phone,
        password
      };
    }
  }
    
