import { InputGroup } from '../../components/ui/input-group'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiFontSize } from 'react-icons/bi'

const PostFooter = ({username}) => {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(1000)

    const handleLike = () =>{
        if (liked) {
            setLiked(false)
            setLikes(likes -1)
        } else{
        setLiked(true)
        setLikes(likes +1)
        }
    }
  return (
    <Box mb={10}>
     <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo/>
        </Box>
     </Flex>
     <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
     </Text>
     <Text fontSize={"sm"} fontWeight={700} >
        {username} {" "}
        <Text as={'span'} fontWeight={400}>
            feeling good
        </Text>
     </Text>
     <Text> 
        View all 1,000 comments
     </Text>
     
     <Flex alignItems={"center"} gap={10} justifyContent={"space-between"} w={"full"}>
         <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14}/>
        <Button fontSize={14} color={"blue.500"} fontWeight={600} 
        cursor={"pointer"} _hover={{color:"white"}} bg={"transparent"}> 
            Post
        </Button>
     </Flex>
     
    </Box>
  )
}

export default PostFooter
