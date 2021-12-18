import React from "react";
import {
  FormControl,
  FormErrorMessage,
  InputProps,
  Input as InputChakra,
} from "@chakra-ui/react";


interface IInputProps extends InputProps {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>( ({ error, isRequired, isInvalid, ...resProps}, ref): React.ReactElement => (
  <FormControl isRequired={isRequired} isInvalid={isInvalid}>
    <InputChakra
      ref={ref} 
      bg={'gray.100'}
      border={0}
      color={'gray.500'}
      _placeholder={{ color: 'gray.500' }}
      {...resProps}
    />
    <FormErrorMessage>{ error }</FormErrorMessage>
  </FormControl>
));