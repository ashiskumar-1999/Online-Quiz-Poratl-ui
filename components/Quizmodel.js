import React from "react"
import { Box, Text, Button, VStack, SimpleGrid } from "@chakra-ui/react"

const QuizModel = ({ question, options = [] }) => {
  return (
    <Box>
      <VStack spacing="15px" my="20px">
        <Text maxW="850px" fontSize="24px" fontWeight="bold">
          {question}
        </Text>
        <SimpleGrid columns={2} spacing="20px">
          {options.map((data) => (
            <Button
              minW="321px"
              mt="20px"
              h="56px"
              backgroundColor="#ffffff"
              color="#000000"
              borderRadius="5px"
              fontSize="17px"
              fontWeight="normal"
              _active={{ backgroundColor: "#6C63FF" }}
            >
              {data}
            </Button>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
export default QuizModel
