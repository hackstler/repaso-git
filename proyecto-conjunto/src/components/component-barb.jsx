import React, { useState } from 'react';
import { Switch, FormControl, FormLabel } from '@chakra-ui/react';

const CustomSwitch = ({ label, initialChecked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel mb="0">{label}</FormLabel>
      <Switch isChecked={isChecked} onChange={handleToggle} colorScheme="teal" />
    </FormControl>
  );
};

export default CustomSwitch;