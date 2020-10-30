import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { LeftBar } from './LeftBar/LeftBar'
import { Body, BodyEmpty } from './Body/Body'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Auth } from './Auth/Auth';

const Container = styled.div`
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background: #23313f;
  height: 99vh;
  max-height: 99vh;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 1px 0 10px 0 #000;
  margin-bottom: 10px;
  @media (max-width: 1024px) {
    height: 100vh;
    max-height: 100vh;
    margin-bottom: 0;
    border-radius: 0;
  }
`

const App = () => {
  const contacts = useSelector(store => store.contacts)
  const token = JSON.parse(localStorage.getItem('user')) || { signed: false }

  return (
    <Container>
      <Router basename={'/messenger'}>
            <LeftBar />
            <Route path='/auth' component={Auth} />
            <Route path='/main' render={() => <BodyEmpty />}/>
              {contacts.map((contact, i) => {
                return (
                    <Route 
                        key={i}
                        path={`/${contact.id + contact.name.replace(/\s/, '').toLowerCase()}`} 
                        render={() => <Body contact={contact}/>} 
                    />
                )
              })}
            {!token.signed ? <Route exact path='/' render={() => <Redirect to="/auth"/>} /> 
                           : <Route exact path='/' render={() => <Redirect to="/main"/>} />
            }
      </Router>
    </Container>
  )
}

export default App;
