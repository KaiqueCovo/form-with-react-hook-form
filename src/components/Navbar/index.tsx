import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image
              boxSize='60px'
              src='https://avatars.githubusercontent.com/u/53986236?s=200&v=4'
              alt='react-hook-form'
            />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} alignItems={'center'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Avatar
                src={'https://avatars.githubusercontent.com/u/31021982?v=4'}
                size={'sm'}
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
          </Flex>
        </Flex>
      </Box>
    </>
  );
}