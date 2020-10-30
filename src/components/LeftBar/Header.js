import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../../store/user/actions'

import onlineCheck from '../../assets/online.svg'
import offlineCheck from '../../assets/offline.svg'
import avatar from '../../assets/avatar.svg'

export const HeaderWrapper = styled.div`
    background: #23313f;
    min-height: 70px;
    position: relative;
    padding: 10px;
    display: flex;
    align-items: center;
`
export const HeaderAvatar = styled.div`
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
    background: ${props => `url(${props.avatar})`} center center no-repeat;
    background-size: 100%;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    &::after {
        position: absolute;
        width: 10px;
        height: 10px;
        bottom: 5px;
        right: 5px;
        content: url(${props => props.online ? onlineCheck : offlineCheck});
    }
`
export const UserName = styled.div`
    margin-left: 20px;
    color: #ffe600;
    @media (max-width: 375px) {
        margin-right: 50px;
    }
` 
const LogOut = styled.svg`
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 2px;
    right: 0;
    fill: #fff;
    cursor: pointer;
    transition: .3s;
    &:hover {
        fill: #ffe600;
    }
    @media (max-width: 375px) {
        right: 50px;
    }
`

export const Header = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    const logOut = () => {
        const user = {
            signed: false,
            name: ''
        }
        dispatch(authAction(user))
    }

    return (
        <HeaderWrapper>
            <HeaderAvatar 
                avatar={user.avatar ? user.avatar : avatar}
                online={true}
            />
            <UserName>{user.name}</UserName>
            <LogOut onClick={logOut}>
                <path d="M12 16L17 12L12 8V11H3V13H12V16Z" />
                <path d="M19 3H10C8.897 3 8 3.897 8 5V9H10V5H19V19H10V15H8V19C8 20.103 8.897 21 10 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3Z" />
            </LogOut>
        </HeaderWrapper>
    )
}