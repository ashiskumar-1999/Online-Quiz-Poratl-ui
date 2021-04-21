import React from "react"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react"
import ButtonComponent from "./ButtonComponent"
const Login = () => {
  return (
    <Flex
      direction={["column", "column", "row", "row", "row"]}
      justifyContent="space-between"
      my="50px"
    >
      <Box justifySelf="flex-end">
        <Image src="https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_100,w_326/v1618747949/Ashis's%20Project/People_iys52t.webp" />
      </Box>
      <Box
        border="1px  #000000"
        boxShadow="lg"
        borderRadius="15px"
        p="69px"
        backgroundColor="#6C63FF"
      >
        <FormControl id="sic" isRequired>
          <Stack spacing="15px">
            <FormLabel fontSize="34px" fontWeight="bold" color="#000000">
              Enter Your SIC/Rollno
            </FormLabel>
            <Input
              p="10px"
              border="1px solid"
              borderRadius="5px"
              placeholder="180352654"
            />
            <FormLabel fontSize="34px" color="#000000" fontWeight="bold">
              Password
            </FormLabel>
            <Input
              p="10px"
              border="1px solid"
              borderRadius="5px"
              placeholder="*******"
            />
          </Stack>
          <Button
            mt="25px"
            h="36px"
            backgroundColor="#ffffff"
            color="#000000"
            borderRadius="5px"
            fontSize="15px"
            fontWeight="bold"
          >
            Enter into Quiz
          </Button>
        </FormControl>

        {/*  <ButtonComponent label="Submit" /> */}
      </Box>
    </Flex>
  )
}

export default Login
