import {
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

interface ISelectProps extends ReactSelectProps {
  isInvalid?: boolean;
  error?: string;
}

export const Select = ({ isInvalid, error, ...resProps}: ISelectProps): React.ReactElement => (
  <FormControl isInvalid={!!isInvalid}>
    <ReactSelect
      classNamePrefix='select'
      closeMenuOnSelect={true}
      {...resProps}
    />
    <FormErrorMessage>{ error }</FormErrorMessage>
  </FormControl>
)