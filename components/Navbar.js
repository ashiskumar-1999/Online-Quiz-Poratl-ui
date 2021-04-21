import { Heading, HStack } from "@chakra-ui/layout"
import { Image, Box } from "@chakra-ui/react"
import React from "react"

const Navbar = () => {
  return (
    <HStack
      h="107px"
      backgroundColor="#6C63FF"
      px="30px"
      justifyContent="space-between"
    >
      <Image src="https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_100,w_170/v1618747938/Ashis's%20Project/image_1_wcqmdj.webp" />
      <Box>
        <Heading fontSize="41px" fontWeight="normal" color="#ffffff">
          Silicon Institute Of Technology
        </Heading>
      </Box>
    </HStack>
  )
}

export default Navbar
