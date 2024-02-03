import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
    overflow: hidden;
    width: 75rem; /* Set fixed width to 60rem */
    margin: 0 auto; /* Center the container */
    border-radius: 0.5rem;
    background-color: #27262c;
    color: #f9f9f9;

    @media (max-width: 1650px) {
        width: 60rem;
    }
    @media (max-width: 1520px) {
        width: 50rem;
    }
    @media (max-width: 1350px) {
        width: 40rem;
    }
    @media (max-width: 1111px) {
        width: 30rem;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`;


const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: #c3c1cb;
`;

const Header = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    font-size: 1rem;
    text-align: left;
    background: #212025;
    color: inherit;
    cursor: pointer;
`;

const HeaderIcon = styled.span`
    transform: rotate(${props => props.isActive ? -180 : 0}deg);
    transition: all 0.2s;
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props =>{
        const inner = document.getElementById(props.itemName);
        return `${props.isActive && inner ? inner.clientHeight : 0}px`;
    }};
    transition: height 0.35s;
`;

const AccordionContent = ({onClick, itemName, itemContent, isActive}) =>{
    return(
        <React.Fragment>
            <Header onClick={onClick}>
                {itemName}
                <HeaderIcon isActive={isActive} className="material-icons">
                    expand_more
                </HeaderIcon>
            </Header>
            <Content itemName={itemName} isActive={isActive}>
                <Inner id={itemName}>{itemContent}</Inner>
            </Content>
        </React.Fragment>
    )
}

export {AccordionContainer, AccordionContent};