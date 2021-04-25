import React from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "../components/Navbar"

const Signup = () => {
  const [sic, setSic] = React.useState("")
  const [password, setPassword] = React.useState("")

  const signup = async () => {
    const data = {
      sic: sic,
      password: password,
    }
    const response = await fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let userdata = await response.json()
    console.log("This is userData:", userdata)
    localStorage.setItem("localuserdata", JSON.stringify(userdata))
    var fetchedUserData = await localStorage.getItem("localUserData")
    console.log(fetchedUserData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signup() // Save the credentials into the dbcollection
  }
  return (
    <>
      <Navbar />
      <Box
        maxW="750px"
        border="1px  #000000"
        boxShadow="lg"
        borderRadius="15px"
        p="69px"
        backgroundColor="#6C63FF"
        mx="auto"
        mt="50px"
      >
        <form>
          <FormControl isRequired>
            <Stack spacing="15px">
              {/*  <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
              Enter Your Name
            </FormLabel>
            <Input
              p="15px"
              border="1px solid"
              borderRadius="5px"
              placeholder="Jhon Snow"
            /> */}
              <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
                Enter Your Sic/Regd.no
              </FormLabel>
              <Input
                p="15px"
                border="1px solid"
                borderRadius="5px"
                placeholder="180318220"
                value={sic}
                onChange={(e) => setSic(e.target.value)}
              />

              {/*  <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
              Institute Name
            </FormLabel>
            <Input
              p="15px"
              border="1px solid"
              borderRadius="5px"
              placeholder="Silicon Institute Of Technology"
            /> */}
              <FormLabel fontSize="24px" fontWeight="bold" color="#000000">
                Password
              </FormLabel>
              <Input
                p="15px"
                border="1px solid"
                borderRadius="5px"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </FormControl>
        </form>
        <Text fontSize="21px" fontWeight="normal">
          Already have an account?
          <Link href="/login" fontSize="21px">
            signin here
          </Link>
        </Text>
      </Box>
    </>
  )
}

export default Signup
