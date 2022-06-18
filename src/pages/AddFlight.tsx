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

export default function AddFlight() {

  const navigate=useNavigate();
  const { errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {

      airport1_id:"",
      airport2_id: "",
      settlement1_id:"",
      settlement2_id:"",
        travel_distance:"",
        travel_time: ""

       
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
              <Heading fontSize={'3xl'}>Data of flight</Heading>
          </Stack>
          <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={0.5} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="airport1_id">Airport1 ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="airport1_id"
                    name="airport1_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.airport1_id}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="airport2_id">Airport2 ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="airport2_id"
                    name="airport2_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.airport2_id}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="settlement1_id">Settlement1 ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="settlement1_id"
                    name="settlement1_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.settlement1_id}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="settlement2_id">Settlement2 ID</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="settlement2_id"
                    name="settlement2_id"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.settlement2_id}
                  />
                </FormControl>

               

                <FormControl>
                  <FormLabel htmlFor="travel_distance">Travel distance</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="travel_distance"
                    name="travel_distance"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.travel_distance}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="travel_time">Travel time</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="travel_time"
                    name="travel_time"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.travel_time}
                  />
                </FormControl>

                <Link href={'/addflight'}>
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