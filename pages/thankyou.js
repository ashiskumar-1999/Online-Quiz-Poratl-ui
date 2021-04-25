import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

function thankyou() {
  return (
    <>
      <Navbar />
      <Box
        mx="300px"
        my="100px"
        border="1px solid"
        borderRadius="10px"
        px="20px"
      >
        <Text fontSize="48px" fontWeight="bold">
          Thank you for attending the Quiz
        </Text>
        <Text fontSize="24px" fontWeight="normal">
          Your responses have been recorded
        </Text>
      </Box>
    </>
  )
}

export default thankyou
