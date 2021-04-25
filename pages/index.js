import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"
import {
  Flex,
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react"
import Link from "next/link"
import QuizModel from "../components/Quizmodel"

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Flex
        direction={["column", "column", "row", "row", "row"]}
        align="center"
        mx="100px"
        justifyContent="space-around"
      >
        <VStack>
          <Text fontSize="48px" fontWeight="bold">
            Welcome to Online Quiz Portal
          </Text>
          <HStack justify="space-between">
            <Link href="/login">
              <Button
                h="46px"
                size="lg"
                backgroundColor="#6C63FF"
                color="#ffffff"
                borderRadius="5px"
                fontSize="15px"
              >
                Sign in as a student
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                h="46px"
                size="lg"
                backgroundColor="#6C63FF"
                color="#ffffff"
                borderRadius="5px"
                fontSize="15px"
              >
                Sign up as a student
              </Button>
            </Link>
          </HStack>
        </VStack>
        <Box maxW="519px " maxH="438px">
          <Image src="https://res.cloudinary.com/emishalabs/image/upload/c_scale,q_100,w_519/v1618747961/Ashis's%20Project/undraw_welcome_3gvl_1_dw2lh7.webp" />
        </Box>
      </Flex>
    </Box>
  )
}
