import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


const Label= styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #EB7729;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;    
`
const Select = styled.select `
    width:100%; 
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    font-size: 1.1rem;
    border-radius: 10px;
    border: none;
`
const useCrypto=(label, initialState, options)=>{
    
    
    const[state, actualizarState] = useState(initialState);

    const SelectCrypto= () => (
        <Fragment>
            <Label>{label}</Label>
            <Select onChange={(e) => actualizarState(e.target.value)}
            value={state}
            >
                <option value="">-Seleccione-</option>
                {options.map ((option) => 
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                )}
            </Select>
        </Fragment>
    )
    return [state, SelectCrypto, actualizarState];
}

export default useCrypto;