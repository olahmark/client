import {
    Button,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function LandingPage() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1,
                }}>
                Let's find your path!
              </Text>
              <br />{' '}
            </Heading>
            
            <Stack direction={{ base: 'column', md: 'row' }} spacing={7}>

              <InputGroup>
                <InputLeftAddon children='From:' />
                <Input type='text' placeholder='Start'  width = {'100px'} />
             </InputGroup>

             <InputGroup>
                <InputLeftAddon children='To:' />
                <Input type='text' placeholder='Destination' width = {'130px'} />
             </InputGroup>

              <Button 
                as="a" href="#"
                boxShadow='dark-lg'
                rounded={'full'}
                width = {'450px'}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.600',
                }}>
               Plan route
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Landing img'}
            objectFit={'cover'}
            src={
              'https://st.depositphotos.com/1005676/2555/i/950/depositphotos_25556037-stock-photo-travel-composite-with-plane-suitcase.jpg'
            }
          />
        </Flex>
      </Stack>
    );
  }