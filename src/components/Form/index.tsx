import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

import { Input, Select } from '../'


export function Form() {
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
        We’re looking for amazing engineers just like you! Become a part
        of our rockstar engineering team and skyrocket your career!
      </Text>
    </Stack>
    <Box as={'form'} mt={10}>
      <Stack spacing={4}>
        <Input
          name='name'
          type='text'
          placeholder='First name'
        />
        <Input
          name='lastName'
          type='text'
          placeholder='Last name'
        />
        <Input
          name="email"
          type="email"
          placeholder='Email'
        />
        <Input
          name="phone"
          type="tel"
          placeholder='Cell phone'
        />
        <Select
          placeholder="Jobs"
          options={[
            { label: 'Engenieer', value: 'engenieer' },
            { label: 'Designer', value: 'designer' },
            { label: 'People', value: 'people' },
          ]}
        />
      </Stack>
      <Button
        fontFamily={'heading'}
        mt={8}
        w={'full'}
        bgGradient="linear(to-r, red.400,pink.400)"
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, red.400,pink.400)',
          boxShadow: 'xl',
        }}>
        Submit
      </Button>
    </Box>
    form
  </Stack>
  )
}