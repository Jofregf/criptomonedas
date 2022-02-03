import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div `
    color: #FAD36B;
    font-family: Arial, Helvetica, sans-serif;
`
const Parrafo = styled.p `
    font-size: 18px;

    span {
        font-weight: bold;
    }
`

const Precio = styled.p `
    font-size: 30px;

    span {
        font-weight: bold;
    }
`

const Cotizacion = ({result}) => {
  
    if(Object.keys(result).length === 0) return null;
    console.log(result)
    return (
    <ResultDiv>
        <Precio>El precio es: <span>{result.PRICE}</span></Precio>
        <Parrafo>Precio más alto del día: <span>{result.HIGHDAY}</span></Parrafo>
        <Parrafo>Precio más bajo del día: <span>{result.LOWDAY}</span></Parrafo>
        <Parrafo>Variacion en 24 hs: <span>{result.CHANGEPCT24HOUR} %</span></Parrafo>
        <Parrafo>Última actualización: <span>{result.LASTUPDATE}</span></Parrafo>
    </ResultDiv>);
};

export default Cotizacion;