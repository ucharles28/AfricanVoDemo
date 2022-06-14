// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import {useRouter} from 'next/router'
// import logo from './public/logo.png'
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

function Menu() {
  return (
    <div className='navbar'>
      <Navbar 
        bg="white" 
        variant="light" 
        fixed="top"
        className='navborder'>
        <Container>
        <Navbar.Brand href="/">
          <img src="https://i.ibb.co/fqKFnPj/logo.png" alt="africanvo" width={110} padding-top={10} layout='responsive' />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#" style={{color:'#111827'}} >Post a Project</Nav.Link>
          <Nav.Link href="#" style={{color:'#111827'}} >Find Voices</Nav.Link>
          <Nav.Link href="#" style={{color:'#111827'}} >Find Translators</Nav.Link>
          <Nav.Link href="/signup" style={{color:'#111827'}} >Sign up</Nav.Link>
          <Button href='/login'>Login</Button> 
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu