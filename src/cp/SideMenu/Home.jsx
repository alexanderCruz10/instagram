import { AiFillHome } from "react-icons/ai";
import React from 'react'
import { Tooltip } from "../../components/ui/tooltip";
import { Button, Box } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";


const Home = () => {
  return (
    <Tooltip hasArrow label={"Home"} placement='right' ml={1} openDelay={500}
    display={{ base: "block", md: "none" }}>
      <Link to={"/"} as={RouterLink} gap={4} _hover={{ bg: "whiteAlpha.400" }}p={2} 
       w={{ base: 10, md: "full" }}>
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}>Home</Box>
      </Link>
    </Tooltip>  
  )
}

export default Home
