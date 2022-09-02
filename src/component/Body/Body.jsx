import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonNotice, Card, Container, Flexing } from './style'
import {Link} from 'react-router-dom'
import Loader from '../Loader/Loader'

export const Body = () => {
   const [data, setData] = useState([])
   const [text, setText] = useState('')
   const [loading , setLoading] = useState(true)

   const AllFetchingData = async () => {
    await axios.get('https://travels-book.herokuapp.com/api/travel').then(res => {
      if(res?.status == 200){
        setLoading(false)
      }
      setData(res?.data?.travels)
    })
   }

   useEffect(() => {
     AllFetchingData()
   }, [])


   const getDelete = async(ids) => {
     await axios.delete(`https://travels-book.herokuapp.com/api/travel/${ids}`)
     AllFetchingData()
   }

   const getSearch = async() => {
    if(text !== ''){
        await axios.get(`https://travels-book.herokuapp.com/api/travel/search/${text}`).then(res => setData(res?.data?.travel))
    }else{
        AllFetchingData()
    }
   }

  return (
    <Container>
        <Flexing>
         <Container.Input onCh
         
         ange={(e) => setText(e.target.value) } type={'text'} placeholder='search'/>
         <Container.Btn onClick={getSearch}>Search</Container.Btn>
        </Flexing>

{
  loading ? <Loader/>:
          (data.map((value) => {
              return(
              <Card key={value?._id}>
                  <Card.Img src={value?.image} alt='imgs'/>
                  <Card.Title>{value?.title}</Card.Title>
                  <Card.Descr>{value?.descr}</Card.Descr>
                  {/* btn */}
                  <Flexing>
                    <Link to={`/edit/:${value._id}`}>
                    <ButtonNotice colored="blue">Update</ButtonNotice>
                    </Link>
                    <Link to={`/view/:${value._id}`}>
                      <ButtonNotice textBlack colored="yellow">View</ButtonNotice>
                    </Link>
                    <ButtonNotice onClick={() => getDelete(value?._id)} colored="red">Delete</ButtonNotice>
                 </Flexing>
              </Card>
              )
          }))
      
  
}

       
       

   
    </Container>
  )
}

export default Body