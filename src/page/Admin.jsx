import { Button, Heading, Input } from '@chakra-ui/react'
import React from 'react';
// import axios from "axios;"
import { useState } from 'react'

const Admin = () => {
    const [face,setFace] = useState("");
    const [linke,setLinke] = useState("");
    const [insta,setInsta] = useState("");
    const [image1,setImage1] = useState("");
    const [image2,setImage2] = useState("");
    const [admin,setAdmin] = useState("");

    const handleAdd=()=>{

    }
    const handleface=()=>{

    }
    const handlelink=()=>{

    }
    const handleinsta=()=>{

    }
    const handleimg1=()=>{

    }
    const handleimg2=()=>{

    }
  return (
    <div>
        <Heading>Admin Page</Heading>
        <div>
            <p>Add Admin</p>
            <Input placeholder='enter number' onChange={(e)=>setAdmin(e.target.value)}/>
            <Button onClick={handleAdd}>Add</Button>
        </div>
        <div>
            <p>Change Facebook Link</p>
            <Input placeholder='enter text' onChange={(e)=>setFace(e.target.value)}/>
            <Button onClick={handleface}>Change</Button>
        </div>
        <div>
            <p>Change Linkedin Link</p>
            <Input placeholder='enter text' onChange={(e)=>setLinke(e.target.value)}/>
            <Button onClick={handlelink}>Change</Button>
        </div>
        <div>
            <p>Change Instagram Link</p>
            <Input placeholder='enter text' onChange={(e)=>setInsta(e.target.value)}/>
            <Button onClick={handleinsta}>Change</Button>
        </div>
        <div>
            <p>Change iamge1 Link</p>
            <Input placeholder='enter text' onChange={(e)=>setImage1(e.target.value)}/>
            <Button onClick={handleimg1}>Change</Button>
        </div>
        <div>
            <p>Change Partners Image Link</p>
            <Input placeholder='enter text' onChange={(e)=>setImage2(e.target.value)}/>
            <Button onClick={handleimg2}>Change</Button>
        </div>
    </div>
  )
}

export default Admin