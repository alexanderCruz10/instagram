import { Box, VStack,Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth_Form = () => {

  const [isLogin, setIsLogin] = useState(false)
  const [inputs,setInputs] = useState({
    email:' ',
    password:'',
    confirmPassword:''
  })
  const navigate = useNavigate() 

  const handleAuth = ()=> {
    if(!inputs.email || !inputs.password){
      alert("Fill in the fields")
      return
    }
    navigate("/")
  }
  return (
  <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
      <Input 
      placeholder='Email' 
      fontSize={14} type='email' 
      value={inputs.email}
      onChange={(e) => setInputs({...inputs,email:e.target.value})}
      />
      <Input placeholder='Password' 
      fontSize={14} 
      type='password'
      value={inputs.password}
      onChange={(e) => setInputs({...inputs,password:e.target.value})}/>

      {isLogin ? (<Input 
      placeholder='confirm password'
       fontSize={14} 
       type='password'
       value={inputs.confirmPassword}
      onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
      />) : null}

      <Button w={"full"} colorPalette="blue" size={"sm"} fontSize={14} onClick={handleAuth}> 
        {isLogin ? "Sign up" : "Log in" }
      </Button>

      <Flex> 
        <Box flex={2} h={"1px"} bg={"grey.400"} />
        <Text mx={1} color={"white"}> OR</Text>
        <Box flex={2} h={"1px"} bg={"grey.400"} />
      </Flex>

      <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <Image src='/google.png' w={5} alt='Google logo' />
        <Text mx='2' color={"blue.500"}>
          Log in with google
        </Text>
      </Flex>
    </Box>

    <Box border={"1px solid grey"} borderRadius={4} padding={5}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box mx={2} fontSize={14}>
          {isLogin ? "Already have an account?": "Don't have an account?" }
        </Box>
        <Box onClick={()=> setIsLogin(!isLogin)}  color={"blue.500"} cursor={"pointer"}>
          {isLogin ? "Log in" : "Sign up"}
        </Box>
      </Flex>
    </Box>
</>
  )
}

export default Auth_Form
