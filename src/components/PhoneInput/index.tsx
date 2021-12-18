import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

import {
  FormControl,
  FormErrorMessage,
  Input as InputChakra,
  InputProps
} from '@chakra-ui/react';

interface IPhoneInputProps extends NumberFormatProps {
  error?: string;
}

const Input = ( props: InputProps ) => (
    <InputChakra
      bg={'gray.100'}
      border={0}
      color={'gray.500'}
      _placeholder={{ color: 'gray.500' }}  
      { ...props }
    />
);

export const PhoneInput = ({ error, isInvalid, ...resProps}: IPhoneInputProps): React.ReactElement => (
  <FormControl isInvalid={isInvalid}>
    <NumberFormat placeholder='teste' format="(##) #####-####" customInput={Input} {...resProps} />
    <FormErrorMessage>{ error }</FormErrorMessage>
  </FormControl>
);