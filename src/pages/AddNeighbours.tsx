import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//import countryFormValidationSchema from "../components/Validation/validation";

export default function AddNeighbours() {

  const navigate=useNavigate();
  const { errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {

        country_id1:"",
        country_id2: ""
       
    },

    //validationSchema : countryFormValidationSchema,
  
    onSubmit: (values) => {
      
      alert(JSON.stringify(values, null, 2));
          
      navigate('/');
      const data = { values };

       /* fetch(`URL`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
           //alert(JSON.stringify(data, null, 2));  
          })
          .catch((error) => {
            console.error('Error:', error);
          });*/
              }
    });
  return (
    <Flex  bg="gray.20" align="top" justify="center" h="100vh">
        <Stack spacing={3} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
              <Heading fontSize={'3xl'}>Neighbours</Heading>
          </Stack>
          <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={0.5} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="country_id1">Country ID1</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="country_id1"
                    name="country_id1"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.country_id1}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="country_id2">Country ID2</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="country_id2"
                    name="country_id2"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.country_id2}
                  />
                </FormControl>
                <Link href={'/'}>
                <Button 
                type="submit"  
                width="full"
                bg={'teal.400'}
                color={'white'}
                _hover={{bg: 'teal.600'}}>
                  Submit
                </Button>
                </Link>
              </VStack>
            </form>
          </Box>
      </Stack>
    </Flex>
  );
}