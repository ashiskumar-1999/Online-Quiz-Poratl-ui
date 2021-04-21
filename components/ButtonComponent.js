import React from "react"
import Button from "@chakra-ui/react"

const ButtonComponent = ({ label }) => {
  return (
    <Button
      h="46px"
      size="lg"
      backgroundColor="#6C63FF"
      color="#ffffff"
      borderRadius="5px"
      fontSize="15px"
    >
      {label}
    </Button>
  )
}

export default ButtonComponent
