class PayloadFactory {
    createPayload(phone, password) {
      return {
        phone,
        password,
      };
    }
  }
  
  export default PayloadFactory;
