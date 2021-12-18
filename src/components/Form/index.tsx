import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  useToast
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { contactValidationSchema } from '@/validations';

import { Input, Select } from '../'

export function Form() {
  const toast = useToast()

  const {register, control, formState: { errors }, ...form } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(contactValidationSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      cellphone: '',
      job: ''
    },
  });

  const handleSubmit = form.handleSubmit((values) => {
    console.log(values)

    if (!toast.isActive('contact-submitted')) {
      toast({
        id: 'contact-submitted',
        title: 'Wow, Your contact is submitted!',
        position: 'top-right',
        variant: 'left-accent',
        status: 'success',
        isClosable: true,
        containerStyle: { marginTop: 80 }
      })
    }
  });

  return (
    <Stack
    bg={'gray.50'}
    rounded={'xl'}
    p={{ base: 4, sm: 6, md: 8 }}
    spacing={{ base: 8 }}
    maxW={{ lg: 'lg' }}>
    <Stack spacing={4}>
      <Heading
        color={'gray.800'}
        lineHeight={1.1}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
        Join our team
        <Text
          as={'span'}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text">
          !
        </Text>
      </Heading>
      <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
        We’re looking for amazing people just like you! Become a part of our rockstar team and skyrocket your career!
      </Text>
    </Stack>
    <Box as={'form'} mt={10} onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <Input
          name='name'
          type='text'
          placeholder='First name'
          isInvalid={!!errors.name?.message}
          error={errors.name?.message}
          {...register('name') }
        />
        <Input
          name='lastName'
          type='text'
          placeholder='Last name'
          isInvalid={!!errors.lastName?.message}
          error={errors.lastName?.message}
          {...register('lastName') }
        />
        <Input
          name="email"
          type="email"
          placeholder='Email'
          isInvalid={!!errors.email?.message}
          error={errors.email?.message}
          {...register('email') }
        />
        <Input
          name="cellphone"
          type="tel"
          placeholder='Cell phone'
          isInvalid={!!errors.cellphone?.message}
          error={errors.cellphone?.message}
          {...register('cellphone') }
        />
        <Controller
          name='job'
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              placeholder="Jobs"
              onChange={val => onChange( val.value )}
              options={[
                { label: 'Engenieer', value: 'engenieer' },
                { label: 'Designer', value: 'designer' },
                { label: 'People', value: 'people' },
              ]}
              isInvalid={!!errors.job?.message}
              error={errors.job?.message}
            />
          )}
        ></Controller>
        
      </Stack>
      <Button
        type='submit'
        fontFamily={'heading'}
        mt={8}
        w={'full'}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, red.400,pink.400)',
          boxShadow: 'xl',
        }} 
      >
        Submit
      </Button>
    </Box>
    form
  </Stack>
  )
}