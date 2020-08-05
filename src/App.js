import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      title: 'Ray Dunning II',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Software Engineer & U.S. Army Veteran',
        subTitle: '',
        text: 'Learn more about me below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Reach Out!'
      }
    }
  }





  render(){

    return( 
        <Router>
        <Container className='p-0' fluid={true}>

        <Navbar className='border-bottom'   bg='transparent' expand='lg'> 
         <Navbar.Brand>Ray Dunning II </Navbar.Brand>

         <Navbar.Toggle className='border-0' aria-controls='Navbar-Toggle' />
         <Navbar.Collapse id='navbar-toggle'>
         <Nav className='ml-auto'>
           <Link className='nav-link' to='/'>Home</Link>
           <Link className='nav-link' to='/about'>About</Link>
           <Link className='nav-link' to='/contact'>Contact</Link>
         </Nav>
         </Navbar.Collapse>
        </Navbar>

     <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}  />} />
     <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
     <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />

        <Footer/>
        </Container>
        </Router>
    )
  }
}

export default App;
