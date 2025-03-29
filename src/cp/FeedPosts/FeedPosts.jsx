import { Container, Flex, Skeleton,VStack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {

  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,index) =>(
        <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={'2'}>
          <Skeleton height="200px"  width={"500px"}/>
          </Flex>
        </VStack>  
      ))}
      {!isLoading && (
        <>
         <FeedPost username={'burakorkmezz'} img={'/img1.png'} avatar={'/img1.png'}/>
         <FeedPost username={'josh'} img={'/img2.png'} avatar={'/img2.png'}/>
         <FeedPost username={'janedoe'} img={'/img3.png'} avatar={'/img3.png'}/>
         <FeedPost username={'johndoe'} img={'/img4.png'} avatar={'/img4.png'}/>
        </>
      )} 
   </Container>
  )
}

export default FeedPosts
