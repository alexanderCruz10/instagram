import SideMenu from '../../cp/SideMenu/SideMenu'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
  const {pathname} = useLocation()

  return (
   <Flex> 
    {pathname !== '/auth' ? (
      <Box w={{base:"70px", md:"240px"}}>
        <SideMenu />
      </Box>
    ): null}
    
    <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)" }}>
        {children}
    </Box>
   </Flex>
  )
}

export default PageLayout
