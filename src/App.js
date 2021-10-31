import React, {useState, useEffect} from 'react';
import './App.css';
import Image from './img/logo.png';
import styled from 'styled-components';
import {IncreaseBtn, DecreaseBtn, CheckBtn, GenerateBtn} from './components/buttons';
import genPass from './functions/genPass';

const App = () => {
  const [config, changeConfig] = useState({
    charNum: 8,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  });

  const [generatedPassword, changeGeneratedPassword] = useState('');

  useEffect(() => {
    changeGeneratedPassword(genPass(config));
  }, [config]);

  const increaseChar = () => {
    if(config.charNum < 16){
      changeConfig((oldConfig) => {
        const newConfig = {...oldConfig};
        newConfig.charNum += 1;
        return newConfig;
      });
    }
  }

  const decreaseChar = () => {
    if(config.charNum > 1){
      changeConfig((oldConfig) => {
        const newConfig = {...oldConfig};
        newConfig.charNum -= 1;
        return newConfig;
      });
    }
  }

  const toggleSymbols = () => {
    changeConfig((oldConfig) => {
      const newConfig = {...oldConfig};
      newConfig.symbols = !newConfig.symbols;
      return newConfig;
    });
  }

  const toggleNumbers = () => {
    changeConfig((oldConfig) => {
      const newConfig = {...oldConfig};
      newConfig.numbers = !newConfig.numbers;
      return newConfig;
    });
  }

  const toggleUppercase = () => {
    changeConfig((oldConfig) => {
      const newConfig = {...oldConfig};
      newConfig.uppercase = !newConfig.uppercase;
      return newConfig;
    });
  }

  const toggleLowercase = () => {
    changeConfig((oldConfig) => {
      const newConfig = {...oldConfig};
      newConfig.lowercase = !newConfig.lowercase;
      return newConfig;
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    changeGeneratedPassword(genPass(config));
  }

  return (
    <div className="container">
      <Logo>
        <img src={Image} alt="" />
      </Logo>

      <form onSubmit={onSubmit}>
        <Row>
          <label>Characters:</label>
          <Controls>
            <DecreaseBtn click={decreaseChar} />
            <span>{config.charNum}</span>
            <IncreaseBtn click={increaseChar} />
          </Controls>
        </Row>
        <Row>
          <label>Symbols?</label>
          <CheckBtn selected={config.symbols} click={toggleSymbols} />
        </Row>
        <Row>
          <label>Numbers?</label>
          <CheckBtn selected={config.numbers} click={toggleNumbers} />
        </Row>
        <Row>
          <label>Uppercase?</label>
          <CheckBtn selected={config.uppercase} click={toggleUppercase} />
        </Row>
        <Row>
          <label>Lowercase?</label>
          <CheckBtn selected={config.lowercase} click={toggleLowercase} />
        </Row>
        <Row>
          <GenerateBtn />
          <Input type="text" readOnly={true} value={generatedPassword}/>
        </Row>
      </form>
    </div>
  );
}

export default App;

const Logo = styled.div`
  margin-bottom: 50px;

  img {
    width: 100%;
    vertical-align: top;
  }
`

const Row = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  & > * {
    flex: 1;
  }

  span {
    line-height: 40px;
    background: #33257e;
  }
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    border: 1px solid rgba(255,255,255,.50);
  }

  &::selection {
    background: #212139;
  }

  &::-moz-selection {
    background: #212139;
  }
`;