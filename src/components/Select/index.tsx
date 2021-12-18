import {
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import ReactSelect, { Props as ReactSelectProps, ActionMeta, OnChangeValue } from 'react-select';

interface ISelectType { label: string, value: number }

interface ISelectProps extends ReactSelectProps {
  isInvalid?: boolean;
  error?: string;
  onChange?: (newValue: OnChangeValue<ISelectType, false>, actionMeta: ActionMeta<ISelectType> ) => void;
}

export const Select = ({ isInvalid, error, ...resProps}: ISelectProps): React.ReactElement => (
  <FormControl isInvalid={isInvalid}>
    <ReactSelect
      classNamePrefix='select'
      closeMenuOnSelect={true}
      {...resProps}
    />
    <FormErrorMessage>{ error }</FormErrorMessage>
  </FormControl>
)