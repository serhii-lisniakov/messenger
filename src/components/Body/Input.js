import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import send_icon from '../../assets/send.svg'
import send_icon_active from '../../assets/send-active.svg'
import { useDispatch, useSelector } from 'react-redux'
import { chuckNorrisAnswerAction, newMessageAction } from '../../store/contacts/actions'

const InputWrapper = styled.form`
    padding: 15px 30px;
    background: lightblue;
    margin-top: auto;
    border-bottom-right-radius: 25px;
    background: #23313f;
    position: relative;
`
export const Message = styled.input`
    width: 100%;
    height: 36px;
    padding: 4px 30px 4px 15px;
    background: url(${send_icon}) calc(100% - 30px) center no-repeat ;
    background-size: 25px;
    border: 1px solid ${props => props.empty ? '#fff' : 'red'};
    border-radius: 10px;
    outline: none;
    transition: .3s;
    color: #fff;
    caret-color: #ffe600;
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    &:focus {
        border: 1px solid #ffe600;
        background: url(${send_icon_active}) calc(100% - 30px) center no-repeat;
        background-size: 25px;
    }
`
const SendBtn = styled.button`
    position: absolute;
    width: 40px;
    height: 36px;
    background: none;
    border: none;
    right: 50px;
    cursor: pointer;
    outline: none;
`

export const Input = ({contactId}) => {
    const contacts = useSelector(store => store.contacts)
    const [message, setMessage] = useState('')
    const [isEmpty, setEmpty] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => () => localStorage.setItem('contacts', JSON.stringify(contacts)), [contacts])

    const sendMessage = e => {
        e.preventDefault()

        const newMessage = {
            contactId,
            message: {
                own: true,
                message,
                date: new Date().toString()
            }
        }

        if (message.trim().length) {
            dispatch(newMessageAction(newMessage))
            setTimeout(() => dispatch(chuckNorrisAnswerAction(contactId)), 5000)
            setMessage('')
        } else {
            setEmpty(!isEmpty)
            setTimeout(() => setEmpty(prev => !prev), 2000)
        }
    }
 
    return (
        <InputWrapper onSubmit={e => sendMessage(e)}>
            <Message 
                placeholder='Enter the message' 
                value={message} 
                onChange={e => setMessage(e.target.value)}
                empty={isEmpty}
            />
            <SendBtn type='submit'></SendBtn>
        </InputWrapper>
    )
}