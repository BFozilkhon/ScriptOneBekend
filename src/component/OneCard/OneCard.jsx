import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , Link} from 'react-router-dom'
import { Container, ButtonNotice, Card} from './style'

export const OneCard = () => {
  const {id} = useParams()
  const [malumot, setMalumot] = useState({})

  useEffect(() => {
    axios.get(`https://travels-book.herokuapp.com/api/travel/${id.replace(':', '')}`).then(res => setMalumot(res?.data?.travel))
  }, [])

  

  return (
    <Container>

             <Card>
                <Card.Img src={malumot?.image} alt='imgs'/>
                <Card.Title>{malumot?.title}</Card.Title>
            <Card.Descr>{malumot?.descr}</Card.Descr>
                    {/* btn */}
                    <Link to='/'>
                      <ButtonNotice>Back</ButtonNotice>
                    </Link>
             </Card>
    </Container>
  )
}

export default OneCard