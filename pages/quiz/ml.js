import React from "react"
import QuizModel from "../../components/Quizmodel"
import { Box, Text, Button } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import Link from "next/link"

const quizdata = [
  {
    id: 1,
    question: "Q1. ML is a field of AI consisting of learning algorithms that ",
    options: [
      "Imporve their performance",
      "At executing some task",
      "Over the time with experience",
      "All of the above",
    ],
  },
  {
    id: 2,
    question:
      "Q2. Which action of a robot arm specify to place block A on block B",
    options: ["STACK(A,B)", "LIST(A,B)", "QUEUE(A,B)", "none of the above"],
  },
  {
    id: 3,
    question:
      "Q3. Which doesn't be included in the categories in model of a language? ",
    options: [
      "System Unit",
      "Structural Units",
      "Data Units",
      "empirical units",
    ],
  },
  {
    id: 4,
    question: "Q4. Different methods does not include ",
    options: ["Introduction", "Analogy", "Deduction", "memorization"],
  },
  {
    id: 5,
    question:
      "Q5. The model will be trained with data in one batch is known as?",
    options: [
      "Batch learning",
      "Offline Learning ",
      "Both A & B",
      "None of the above",
    ],
  },
]

function quiz() {
  return (
    <>
      <Navbar />
      <Box border="1px solid" mx="200px" my="100px">
        <Text fontSize="50px" fontWeight="bold" textAlign="center">
          Welcome to ML quiz
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
