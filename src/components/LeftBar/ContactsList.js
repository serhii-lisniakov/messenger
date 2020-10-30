import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Message } from '../Body/Input'
import { HeaderAvatar } from '../LeftBar/Header'
import search_icon from '../../assets/search.svg'
import search_icon_active from '../../assets/search-active.svg'
import { Link, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ListWrapper = styled.div`
    background: #23313f;
    border-bottom-left-radius: 25px;
    flex-grow: 1;
    overflow-y: scroll;
    padding-bottom: 20px;
    &::-webkit-scrollbar {
        width: 4px;
        position: absolute;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
    }
`
const SearchWrapper = styled.div`
    height: 60px;
    padding: 0 10px;
    background: #23313f;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
`
const Search = styled(Message)`
    padding: 4px 15px 4px 35px;
    background: url(${search_icon}) 10px center no-repeat ;
    background-size: 14px;
    border-color: #fff;
    &:focus {
        background: url(${search_icon_active}) 10px center no-repeat ;
        background-size: 17px;
    }
`
const ContactWrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: .3s;
    color: #fff;
    &:hover {
        background: #2f4255;
    }
`
const ContactAvatar = styled(HeaderAvatar)`
    margin-right: 15px;
`
const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
`
const ContactName = styled.div`
    letter-spacing: 1px;
`
const ContactMessage = styled.div`
    font-size: 12px;
    font-style: italic;
    margin-top: 2px;
`
const ContactDate = styled.div`
    display: flex;
    margin-left: auto;
    font-size: 10px;
`

const Contact = ({avatar, name, history, online}) => (
    <ContactWrapper>
        <ContactAvatar avatar={avatar} online={online}/>
        <ContactContent>
            <ContactName>
                {name}
            </ContactName>
            <ContactMessage>
                {history[0].own ? 'You: ' : ''}
                {history[0].message.substr(0, 30) + '...'}
            </ContactMessage>
        </ContactContent>
        <ContactDate>
            {new Date(history[0].date).toLocaleDateString()}
        </ContactDate>
    </ContactWrapper>
)

const ContactsList = () => {
    const store = useSelector(store => store.contacts)
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState(store)

    useEffect(() => {
        setContacts(store.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()) ? contact : false))
    }, [search, store])

    return (
        <>
            <SearchWrapper>
                <Search 
                    placeholder='Search' 
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                />
            </SearchWrapper>
            <ListWrapper>
                {contacts.sort((a,b) => {
                    return new Date(b.history[0].date).getTime() - new Date(a.history[0].date).getTime() 
                })
                .map((contact, i) => {
                    return (
                        <Link key={i} to={`/${contact.id + contact.name.replace(/\s/, '').toLowerCase()}`}>
                            <Contact 
                                avatar={contact.avatar}
                                name={contact.name}
                                history={contact.history}
                                online={contact.online}
                            />
                        </Link>
                    )
                })}
            </ListWrapper>
        </>
    )
}

export default withRouter(ContactsList)