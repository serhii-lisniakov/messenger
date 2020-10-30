import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { authAction } from '../../store/user/actions';
import googleIcon from '../../assets/google.svg'
import facebookIcon from '../../assets/facebook.svg'
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const AuthWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    .kep-login-facebook {
        width: 300px;
        height: 45px;
        border-radius: 10px !important;
        padding: 0 0 0 50px;
        font-size: 15px;
        font-weight: 600;
        background: url(${facebookIcon}) 10px center no-repeat, #4c69ba; 
        text-align: left;
        font-family: 'Arial';
        outline: none;
        border: none;
        &:hover {
            background-color: #ffe600;
            color: #000;
        }
    }
`
const SignButton = styled.input`
    display: block;
    border: 1px solid ${props => props.isEmpty ? '#fff' : 'red'};
    padding: 10px 15px;
    background: transparent;
    transition: .3s;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1px;
    color: #ffe600;
    margin: 10px 0;
    outline: none;
    width: 300px;
    height: 45px;
    border-radius: 10px;
    &:focus {
        border-color: #ffe600;
    }
    &:hover {
        color: #000;
        border-color: #ffe600;
        background: #ffe600;
    }
    &::placeholder {
        text-transform: uppercase;
        font-size: 12px;
    }
`
const CustGoogleLogin = styled.button`
    width: 300px;
    height: 45px;
    text-transform: uppercase;
    border-radius: 10px;
    padding-left: 50px;
    font-size: 15px;
    text-align: left;
    font-weight: 600;
    background: url(${googleIcon}) 10px center no-repeat, #fff;
    border: none;
    cursor: pointer;
    font-family: 'Arial';
    outline:none;
    margin: 10px 0;
    transition: .3s;
    &:hover {
        background-color: #ffe600;
    }
`

export const Auth = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [isEmpty, setEmpty] = useState(true)
    const token = useSelector(store => store.user.signed)

    const auth = (user) => {
        dispatch(authAction(user))
        props.history.push('/main')
    } 
    
    const signIn = (e) => {
        e.preventDefault()
        
        if (name.trim().length) {
            const user = {
                signed: true,
                name
            }
            auth(user)
        } else {
            setEmpty(!isEmpty)
            setTimeout(() => setEmpty(prev => !prev), 2000)
        }
    }

    const signInGoogle = (response) => {
        const user = {
            signed: true,
            name: response.profileObj.name,
            avatar: response.profileObj.imageUrl
        }
        auth(user)
    }

    const signInFacebook = (response) => {
        const user = {
            signed: true,
            name: response.name,
            avatar: response.picture.data.url
        }
        auth(user)
    }

    if (token) return <Redirect to="/main" />;
    return (
        <AuthWrapper>
            <form onSubmit={e => signIn(e)}>
                <SignButton
                    isEmpty={isEmpty}
                    value={name} 
                    placeholder='Enter your name' 
                    onChange={e => setName(e.target.value)}
                />
                <SignButton 
                    placeholder='Password is a fake'
                    type='password'
                    isEmpty={true}
                    autoComplete='false'
                />
                <SignButton
                    value='Sign In' 
                    type='submit' 
                    isEmpty={true}
                />
            </form>
            O R
            <GoogleLogin
                clientId="557051824434-grad65tg5blv0op348ip9p5u24rt42g8.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={signInGoogle}
                render={renderProps => (
                    <CustGoogleLogin onClick={renderProps.onClick}>Login with Google</CustGoogleLogin>
                )}
            />
            <FacebookLogin
                appId="3173878222717821"
                autoLoad={true}
                fields="name,email,picture"
                callback={signInFacebook}
            />
        </AuthWrapper>
    )
}