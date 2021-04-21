import React from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react"

const Signup = () => {
  return (
    <Box
      maxW="750px"
      border="1px  #000000"
      boxShadow="lg"
      borderRadius="15px"
      p="69px"
      backgroundColor="#6C63FF"
      mx="auto"
    >
      <FormControl isRequired>
        <Stack spacing="15px">
          <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
            Enter Your Name
          </FormLabel>
          <Input
            p="15px"
            border="1px solid"
            borderRadius="5px"
            placeholder="Jhon Snow"
          />
          <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
            Enter Your Sic/Regd.no
          </FormLabel>
          <Input
            p="15px"
            border="1px solid"
            borderRadius="5px"
            placeholder="180318220"
          />
          <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
            Institute Name
          </FormLabel>
          <Input
            p="15px"
            border="1px solid"
            borderRadius="5px"
            placeholder="Silicon Institute Of Technology"
          />
          <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
            Password
          </FormLabel>
          <Input
            p="15px"
            border="1px solid"
            borderRadius="5px"
            placeholder="*******"
          />
        </Stack>
        <Button
          mt="25px"
          h="30px"
          backgroundColor="#ffffff"
          color="#000000"
          borderRadius="5px"
          fontSize="15px"
          fontWeight="bold"
        >
          Sign up
        </Button>
      </FormControl>
      <Text fontSize="21px" fontWeight="normal">
        Already have an account?
        <Link href="#" fontSize="21px" color="#ffffff">
          signin here
        </Link>
      </Text>
    </Box>
  )
}

export default Signup
