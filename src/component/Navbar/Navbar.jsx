import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './style'

export const Navbar = () => {
  return (
    <div>

    <Container>
      <Container.Logo to='/'>ScriptOneBekend</Container.Logo>
      <Container.Items to='/add'>Add+</Container.Items>
      <Container.Items to='/add'>Api</Container.Items>
    </Container>

    <Outlet/>
    </div>
  )
}

export default Navbar