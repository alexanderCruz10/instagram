import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
//"./img1.png" '/img1.png'

const FeedPost = ({username, img, avatar}) => {
  return (
    <>
     <PostHeader username={username} avatar={avatar}/>
     <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src= {img} alt={username}/>
     </Box>   
     <PostFooter username={username}/> 
    </>
  )
}

export default FeedPost
