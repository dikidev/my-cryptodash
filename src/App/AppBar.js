import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

/* Logo - CryptoStox */
const Logo = styled.div`
    font-size: 1.5em;
`
/* AppBar - Navigation Dashboard & Settings */
const Bar = styled.div`
    display:grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`

/* AppBar - Active & Hover */
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
    text-shadow: -1px 1px 20px #03DAC6
    `}
`

/* AppBar - Capitalize First Letter */
function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

/* AppBar - Active State */
function ControlButton ({name, active}){
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
            <ControlButtonElem
                active={page === name}
                onClick={()=> setPage(name)}
            >
                {toProperCase(name)}
            </ControlButtonElem>
                )}
        </AppContext.Consumer>
    )
}

export default function(){
    return (
        <Bar>
            <Logo> CryptoStox </Logo>
            <div/>
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>
            );
}