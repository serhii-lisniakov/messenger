import React from 'react'
import { Header } from './Header'
import { Chat } from './Chat'
import { Input } from './Input'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    transition: .5s;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const BodyEmptyWrapper = styled(BodyWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.2);
`

export const Body = ({contact}) => {
    const token = useSelector(store => store.user.signed)

    if (!token) return <Redirect to="/auth" />
    return (
        <BodyWrapper>
            <Header contact={contact}/>
            <Chat contact={contact}/>
            <Input contactId={contact.id}/>
        </BodyWrapper>
    )
}

export const BodyEmpty = () => {
    const token = useSelector(store => store.user.signed)

    if (!token) return <Redirect to="/auth" />
    return <BodyEmptyWrapper>Select a dialog...</BodyEmptyWrapper>
}