import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import image from './crypto.png';
import { Form } from './Components/Form';
import Cotizacion from './Components/Cotizacion';
import Spinner from './Components/Spinner';


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #1FC091;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {

  const [money, saveMoney] = useState('');
  const [crypto, saveCrypto] = useState('');
  const [result, saveResult] = useState({});
  const [load, setLoad] = useState(false)

  useEffect (() => {

    const cotizacion = async () => {
      
      if(money === '') return;
      const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${money}`;
  
      const result = await axios.get(url);

      setLoad(true);

      setTimeout(function () {
        setLoad(false);
        saveResult(result.data.DISPLAY[crypto][money]);
      },3000)
    }
    cotizacion();
  }, [money, crypto])

  const componente = (load) ? <Spinner/> : <Cotizacion result={result}/>

  return (
    <Container>
      <div>
        <Img
          src={image}
          alt='crypto'
        />
      </div>
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Form
          saveMoney={saveMoney}
          saveCrypto={saveCrypto}
        />
        {componente}
      </div>
    </Container>
  );
}

export default App;
