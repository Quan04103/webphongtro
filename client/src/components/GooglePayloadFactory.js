import PayloadFactory from './PayloadFactory';

export class GooglePayloadFactory extends PayloadFactory {
    createPayload(email) {
      return {
        email
      };
    }
  }