import React from "react"
import QuizModel from "../../components/Quizmodel"
import { Box, Text, Button } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import Link from "next/link"

const quizdata = [
  {
    id: 1,
    question: "Q1. What are the types of services provided by Cloud?",
    options: ["Iaas", "Pass", "Sass", "none of the above"],
  },
  {
    id: 2,
    question: "Q2. Which the first round testing happended in S/W engineering?",
    options: [
      "Alpha testing",
      "Beta testing",
      "Acceptance testing",
      "none of the above",
    ],
  },
  {
    id: 3,
    question: "Q3. Which the first round testing happended in S/W engineering?",
    options: [
      "Alpha testing",
      "Beta testing",
      "Acceptance testing",
      "none of the above",
    ],
  },
  {
    id: 3,
    question: "Q4. Which the first round testing happended in S/W engineering?",
    options: [
      "Alpha testing",
      "Beta testing",
      "Acceptance testing",
      "none of the above",
    ],
  },
  {
    id: 3,
    question: "Q5. Which the first round testing happended in S/W engineering?",
    options: [
      "Alpha testing",
      "Beta testing",
      "Acceptance testing",
      "none of the above",
    ],
  },
]

function quiz() {
  return (
    <>
      <Navbar />
      <Box border="1px solid" mx="200px" my="100px">
        <Text fontSize="50px" fontWeight="bold" textAlign="center">
          Welcome to Cloud Computing quiz
        </Text>
        <Box>
          {quizdata.map((demo) => (
            <QuizModel question={demo.question} options={demo.options} />
          ))}
        </Box>
        <Box mx="450px" my="80px">
          <Link href="/thankyou">
            <Button
              minW="200px"
              mt="25px"
              h="36px"
              backgroundColor="#6C63FF"
              color="#000000"
              borderRadius="5px"
              fontSize="15px"
              fontWeight="bold"
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default quiz
