import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from '../Components/Error'
import useMoney from '../hooks/useMoney'
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

const Boton= styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #7CC9F2;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #EB7729;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
}
`

export const Form = ({saveMoney, saveCrypto}) => {

  const [cryptolist, saveCripto] = useState([])
  const [error, setError] = useState(false);

  const Money= [
    {code:'USD', name:'Dolar USA'},
    {code:'CHE', name:'Euro'},
    {code:'GBP', name:'Libra'},
    {code:'ARS', name:'Pesos Argentinos'},
    {code:'CLP', name:'Pesos Chilenos'},
    {code:'COP', name:'Pesos Colombianos'},
    {code:'PEN', name:'Sol Peruano'},
    {code:'BRL', name:'Real Brasilero'},
  ]
  const [money, SelectMoney] = useMoney('Elige tu moneda', '', Money);

  const [crypto, SelectCrypto] = useCrypto('Elige tu crypto', '', cryptolist);

  useEffect(() => {
    const consultApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const result = await axios.get(url)
      saveCripto(result.data.Data)
    }
    consultApi();

  }, []);
  const cotizarMoneda= e => {
    e.preventDefault();

    if(money === '' || crypto === '') {
      setError(true);
      return;
    }
    setError(false);
    saveMoney(money);
    saveCrypto(crypto);
  }

  return (
      <form onSubmit={cotizarMoneda}>
        {error? <Error mensaje='Todos los campos son obligatorios'/> : null}
        <SelectMoney/>
        <SelectCrypto/>
        <Boton 
          type="submit"
          value='Calcular'
        />
      </form>
  
  );
};
