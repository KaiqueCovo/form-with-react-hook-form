import {
  Stack,
  Heading,
  Text,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from '@chakra-ui/react';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export function Developers() {
  return (
    <Stack spacing={{ base: 10, md: 20 }}>
    <Heading
      lineHeight={1.1}
      fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
      Senior web designers{' '}
      <Text
        as={'span'}
        bgGradient="linear(to-r, red.400,pink.400)"
        bgClip="text">
        {"&"}
      </Text>{' '}
      Full-Stack Developers
    </Heading>
    <Stack direction={'row'} spacing={4} align={'center'}>
      <AvatarGroup size={useBreakpointValue({ base: 'md', md: 'lg' })}>
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.name}
            name={avatar.name}
            src={avatar.url}
            position={'relative'}
            zIndex={2}
            _before={{
              content: '""',
              width: 'full',
              height: 'full',
              rounded: 'full',
              transform: 'scale(1.125)',
              bgGradient: 'linear(to-bl, red.400,pink.400)',
              position: 'absolute',
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          />
        ))}
      </AvatarGroup>
      <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
        +
      </Text>
      <Avatar
        src='https://avatars.githubusercontent.com/u/31021982?v=4'
        size={useBreakpointValue({ base: 'md', md: 'lg' })}
        position={'relative'}
        zIndex={2}
        _before={{
          content: '""',
          width: 'full',
          height: 'full',
          rounded: 'full',
          transform: 'scale(1.125)',
          bgGradient: 'linear(to-bl, orange.400,yellow.400)',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
    </Stack>
  </Stack>
  )
}