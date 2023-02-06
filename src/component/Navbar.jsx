import { Flex,Heading,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Flex>
            <Spacer/>
            <Heading>Conc.</Heading>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <Text className='nav'><Link to="/">Home</Link></Text>
            <Spacer/>
            <Text className='nav'>Service</Text>
            <Spacer/>
            <Text className='nav'>Pricing</Text>
            <Spacer/>
            <Text className='nav'>Adminpage</Text>
            <Spacer/>
        </Flex>
    </div>
  )
}

export default Navbar