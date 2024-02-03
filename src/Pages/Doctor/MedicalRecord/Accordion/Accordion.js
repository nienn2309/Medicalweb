import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
    overflow: hidden;
    width: 75rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    background-color: rgba(22, 160, 133, 0.5);
    color: black;

    @media (max-width: 1650px) {
        width: 55rem;
    }
    @media (max-width: 1520px) {
        width: 45rem;
    }
    @media (max-width: 1350px) {
        width: 35rem;
    }
    @media (max-width: 1111px) {
        width: 25rem;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`;


const Inner = styled.div`
    position: absolute;
    padding: 1rem;
    color: black;
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
    background-color: rgba(22, 160, 133, 0.5);
    color: inherit;
    cursor: pointer;
    border: 1px solid #4EEE94; 
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