import React from 'react';
import { MessengerCheckbox } from 'react-facebook';

const MyComponent = () => {
  return (
    <div>
      <MessengerCheckbox
        pageId="156196087582502"
        appId="1031368848200891"
        size="large"
        allowLogin="true"
        skin="light"
      />
    </div>
  );
}

export default MyComponent;

