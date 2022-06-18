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
  Select,
  Stack,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//import countryFormValidationSchema from "../components/Validation/validation";

export default function AddAirport() {

  const navigate=useNavigate();
  const { errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {

      airport_international_code:"",
      airport_name: "",
      settlement_id:"",
        country_id:"",
        region_id: ""

       
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
              <Heading fontSize={'3xl'}>Data of airport</Heading>
          </Stack>
          <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={0.5} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="airport_international_code">International ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="airport_international_code"
                    name="airport_international_code"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.airport_international_code}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="airport_name">Airport name</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="airport_name"
                    name="airport_name"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.airport_name}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="region_id">Region ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="region_id"
                    name="region_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.region_id}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="country_id">Country ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="country_id"
                    name="country_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.country_id}
                  />
                </FormControl>

                <Link href={'/addairport'}>
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