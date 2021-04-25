import React from "react"
import QuizModel from "../../components/Quizmodel"
import { Box, Text, Button } from "@chakra-ui/react"
import Navbar from "../../components/Navbar"
import Link from "next/link"

const quizdata = [
  {
    id: 1,
    question: " Q1. Who is known as the father of AI?",
    options: ["Fisher Ada", "Alan Turing ", "Jhon McCarthy", "Allen Newell"],
  },
  {
    id: 2,
    question:
      "Q2. The application/ applications of Artificial Intelligence is/are",
    options: ["Expert Systems", "Gaming", "Vision Systems", "All of the above"],
  },
  {
    id: 3,
    question:
      "Among the given options, which search algorithm requires less memory?",
    options: [
      "Optimal search",
      "Deapth First search",
      "Breadth first search",
      "Linear search",
    ],
  },
  {
    id: 4,
    question: "Which of the given langauge is not commonly used for AI?",
    options: ["LISP", "PROLOG", "Python", "Perl"],
  },
  {
    id: 5,
    question: "The component of an expert system is known as ",
    options: [
      "Knowledge Base",
      "Interface Engine",
      "User Interface",
      "All of the above",
    ],
  },
]

function quiz() {
  return (
    <>
      <Navbar />
      <Box border="1px solid" mx="200px" my="100px">
        <Text fontSize="50px" fontWeight="bold" textAlign="center">
          Welcome to AI quiz
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
