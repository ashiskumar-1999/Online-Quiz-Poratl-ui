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
import Navbar from "../components/Navbar"
import Link from "next/link"

const Login = () => {
  const [sic, setSic] = React.useState("")
  const [password, setPassword] = React.useState("")
  const handlelogin = async () => {
    const data = {
      sic: sic,
      password: password,
    }
    const response = await fetch("http://localhost:3001/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        /*   Authorization:`${}` */
      },
      body: JSON.stringify(data),
    })
    let userdata = await response.json()
    console.log(userdata)
    localStorage.setItem("localuserdata", JSON.stringify(userdata))
    var fetchedUserData = await localStorage.getItem("localUserData")
    console.log(fetchedUserData)
  }
  return (
    <>
      <Navbar />
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        justifyContent="space-between"
        my="50px"
        mx="100px"
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
                value={sic}
                onChange={(e) => setSic(e.target.value)}
              />
              <FormLabel fontSize="34px" color="#000000" fontWeight="bold">
                Password
              </FormLabel>
              <Input
                p="10px"
                border="1px solid"
                borderRadius="5px"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <Link href="/menu">
              <Button
                mt="25px"
                h="36px"
                backgroundColor="#ffffff"
                color="#000000"
                borderRadius="5px"
                fontSize="15px"
                fontWeight="bold"
                onClick={handlelogin}
              >
                Enter into Quiz
              </Button>
            </Link>
          </FormControl>
        </Box>
      </Flex>
    </>
  )
}

export default Login
