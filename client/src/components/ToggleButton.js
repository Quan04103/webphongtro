import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div >
      
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
}

export default ToggleButton;