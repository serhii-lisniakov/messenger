import React, { useRef } from 'react'
import { Header } from './Header'
import ContactsList from './ContactsList'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const LeftBarWrapper = styled.div`
    width: 30%;
    height: 100%;
    min-width: 300px;
    border-right: 1px solid #000;
    transition: .3s;
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        position: absolute;
        left: -300px;
    }
    &.active {
        left: 0;
    }
    @media (max-width: 376px) {
        width: 100%;
        left: -100%;
    }
`
const LeftBarButton = styled.div`
    background: #ffe600;
    opacity: 0.5;
    width: 70px;
    cursor: pointer;
    height: 70px;
    display: none;
    position: absolute;
    left: calc(100% + 2px);
    transition: .3s;
    @media (max-width: 768px) {
        display: block;
    }
    z-index: 9;
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-70%, -50%) rotate(135deg);
        transition: .5s;
        width: 10px;
        height: 10px;
        border-top: 3px solid #000;
        border-left: 3px solid #000;
    }
    &:hover {
        opacity: 1; 
    }
    &.active {
        width: calc(100vw - 300px);
        opacity: 1;
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        @media (max-width: 376px) {
            width: 50px;
            left: calc(100% - 50px);
        }
    }
`
const LeftBarWrapperNotSigned = styled(LeftBarWrapper)`
    width: 0;
    min-width: 0;
    border-right: none;
`

export const LeftBar = () => {
    const wrap = useRef()
    const btn = useRef()
    const token = useSelector(store => store.user.signed)

    const showBar = () => {
        wrap.current.classList.toggle('active')
        btn.current.classList.toggle('active')
    }

    if (!token) return <LeftBarWrapperNotSigned></LeftBarWrapperNotSigned>
    return (
        <LeftBarWrapper ref={wrap}>
            <LeftBarButton ref={btn} onClick={showBar} />
            <Header />
            <ContactsList />
        </LeftBarWrapper>
    )
}