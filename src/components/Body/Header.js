import React from 'react'
import styled from 'styled-components'
import { HeaderAvatar, HeaderWrapper, UserName } from '../LeftBar/Header'

const BodyHeader = styled(HeaderWrapper)`
    justify-content: flex-end;
`
const ContactName = styled(UserName)`
    margin-right: 20px;
    margin-left: 0;
    text-align: right;
    @media (max-width: 375px) {
        padding-left: 70px;
    }
` 

export const Header = ({contact}) => (
    <BodyHeader>
        <ContactName>{contact.name}</ContactName>
        <HeaderAvatar avatar={contact.avatar} online={contact.online}/>
    </BodyHeader>
)