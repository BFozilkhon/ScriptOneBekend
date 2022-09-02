import styled from 'styled-components'

export const Container = styled.div`
width: 45%;
height: 100vh;
margin: 10px auto;
`

export const Card = styled.div`
width: 100%;
background-color: white;
margin: 20px 0px;
height: 700px;
border-radius: 4px;
border: 1px solid rgba(0,0,0,.125);;
`

Card.Img = styled.img`
height: 70%;
width: 100%;
border-radius:4px ;
`

Card.Title = styled.div`
font-size: 25px;
margin-left:10px;
`

Card.Descr = styled.div`
font-size: 18px;
margin: 10px 10px;
`

export const ButtonNotice = styled.button`
cursor: pointer;
border: none;
border-radius: 4px;
margin: 0px 10px;
background-color: black;
color: white;
padding: 10px 25px;
font-size: 20px;
:active{
    transform: scale(0.98);
}
`