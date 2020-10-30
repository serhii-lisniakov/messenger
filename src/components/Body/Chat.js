import React from 'react'
import styled from 'styled-components'
import chatBg from '../../assets/chatbg.jpg'

const ChatWrapper = styled.div`
    flex-grow: 1;
    padding: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    background: url(${chatBg}) center center;
    background-size: cover;
    transition: .5s;
    &::-webkit-scrollbar {
        width: 4px;
        visibility: hidden;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
    }
`
const Message = styled.div`
    padding: 10px 20px 20px;
    margin-top: 20px;
    border-radius: 15px;
    border-bottom-left-radius: 0;
    background: rgba(0, 153, 255, 0.8);
    max-width: 60%;
    min-width: 130px;
    box-shadow: 0 0 10px 0 #0000002f;
    position: relative;
    transition: .5s;
    &::after {
        position: absolute;
        content: '';
        bottom: 0;
        right: 100%;
        border: 3px solid transparent; 
        border-right: 3px solid rgba(0, 153, 255, 0.8); 
        border-bottom: 3px solid rgba(0, 153, 255, 0.8);
    }
    &::before {
        position: absolute;
        content: '${props => props.date}';
        font-size: 10px;
        font-style: italic;
        color: #fff;
        letter-spacing: 1px;
        bottom: 2px;
        right: 10px;
    }
    @media (max-width: 460px) {
        max-width: 80%;
    }
`
const YourMessage = styled(Message)`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 0;
    margin-left: auto;
    background: rgba(255, 230, 0, 0.8);
    color: #000;
    &::after {
        left: 100%;
        border: 3px solid transparent; 
        border-left: 3px solid rgba(255, 230, 0, 0.8); 
        border-bottom: 3px solid rgba(255, 230, 0, 0.8);
    }
    &::before {
        color: #000;
    }
`

export const Chat = ({contact}) => (
    <ChatWrapper>
        {contact.history.map((message, i) => {
            const date = new Date(message.date).toLocaleString().slice(0,-3)

            if (message.own) return <YourMessage key={i} date={date}>{message.message}</YourMessage>
            return <Message key={i} date={date}>{message.message}</Message>
        })}
    </ChatWrapper>
)
