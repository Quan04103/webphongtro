import PayloadFactory from './payloadFactory';

export class DefaultPayloadFactory extends PayloadFactory {
    createPayload(phone, password) {
      return {
        phone,
        password
      };
    }
  }
    
