import React from "react"
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import Navbar from "../components/Navbar"
import Link from "next/link"

const Menupage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        border="1px solid"
        mx="300px"
        my="100px"
        h="450px"
        justifyContent="center"
      >
        <VStack spacing="15px" my="100px">
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w="200px"
                h="40px"
                borderRadius="5px"
                backgroundColor="#6C63FF"
              >
                CSE
              </MenuButton>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w="200px"
                h="40px"
                borderRadius="5px"
                backgroundColor="#6C63FF"
              >
                6th
              </MenuButton>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                w="200px"
                h="40px"
                borderRadius="5px"
                backgroundColor="#6C63FF"
              >
                Subject
              </MenuButton>
              <MenuList>
                <Link href="/quiz/ai">
                  <MenuItem
                    _hover={{ backgroundColor: "#6C63FF" }}
                    borderRadius="5px"
                  >
                    Artificial Intelliegnece
                  </MenuItem>
                </Link>
                <Link href="/quiz/se">
                  <MenuItem
                    _hover={{ backgroundColor: "#6C63FF" }}
                    borderRadius="5px"
                  >
                    Software Engineering
                  </MenuItem>
                </Link>
                <Link href="/quiz/flat">
                  <MenuItem
                    _hover={{ backgroundColor: "#6C63FF" }}
                    borderRadius="5px"
                  >
                    Formal language & Automata Theory
                  </MenuItem>
                </Link>
                <Link href="/quiz/ml">
                  <MenuItem
                    _hover={{ backgroundColor: "#6C63FF" }}
                    borderRadius="5px"
                  >
                    Machine Learning
                  </MenuItem>
                </Link>
                <Link href="/quiz/cloudcomputing">
                  <MenuItem
                    _hover={{ backgroundColor: "#6C63FF" }}
                    borderRadius="5px"
                  >
                    Cloud Computing
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Menupage
