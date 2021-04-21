import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.css"
import { Box } from "@chakra-ui/react"
import Landingpage from "../components/Landingpage"
import Login from "../components/Login"
import Signup from "../components/Signup"

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box mx="100px">
        <Landingpage />
      </Box>
    </Box>
  )
}
