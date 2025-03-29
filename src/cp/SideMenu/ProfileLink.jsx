import { Box, Flex, } from "@chakra-ui/react";
import {Avatar} from "../../components/ui/avatar"
import { Tooltip } from "../../components/ui/tooltip";
import { Link, Link as RouterLink } from "react-router-dom";
import React from 'react'

const ProfileLink = () => {
  return (
    <>
    <Tooltip hasArrow label={"Notifications"}  placement='right' ml={1}
     openDelay={500} display={{base: "block", md: "none"}}>
        <Link display={"flex"} to={"/asaprogrammer"} as={RouterLink} gap={4}
         _hover={{ bg: "whiteAlpha.400" }} p={2} w={{base: 10, md: "full"}}> 
         <Avatar size={"sm"} src={"./profilepic.png"}/> 
         <Box display={{base: "none", md: "block"}}>Profile</Box>
        </Link>
    </Tooltip>
    </>
  )
}

export default ProfileLink
