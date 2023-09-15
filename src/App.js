import React from 'react'
import './Style/Style.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Routes , Route } from 'react-router-dom';
import Allcountrus from './components/All countrys/Allcountrus';
import CountryInfo from './components/Country info/CountryInfo';
const App = () => {
  return (
    <div>
    
    <Navbar expand="lg" className="navs">
      <Container>
        <Navbar.Brand className='barndname' href="#">Where In The World !??</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
    <Routes >
    <Route path='/' element={<Allcountrus />} />
    <Route path='/country/:countryName' element={<CountryInfo />} />
    </Routes>
  </Container>
    </div>
  )
}

export default App
