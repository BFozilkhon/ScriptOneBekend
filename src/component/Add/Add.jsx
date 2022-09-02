import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Wrap } from './style'

export const Add = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        title: '',
        descr: '',
        image: ''
    })

    const getValues = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value })
    }

    const getSave = async() => {
        await axios.post('https://travels-book.herokuapp.com/api/travel/add', {
            title: inputValue.title,
            descr: inputValue.descr,
            image: inputValue.image
        })

        navigate('/')
    }


  return (
    <Container>
        <Wrap>
            <Wrap.Title>Title</Wrap.Title>
            <Wrap.Input name='title' onChange={getValues} type={"text"} />
        </Wrap>
        <Wrap>
            <Wrap.Title>Decription</Wrap.Title>
            <Wrap.Input name='descr' onChange={getValues} type={"text"} />
        </Wrap>
        <Wrap>
            <Wrap.Title>Image</Wrap.Title>
            <Wrap.Input name='image' onChange={getValues} type={"text"} />
        </Wrap>
        <Container.Button onClick={getSave}>Add News</Container.Button>
    </Container>
  )
}

export default Add