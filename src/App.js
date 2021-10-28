import React from 'react';
import './App.css';
import Image from './img/logo.png';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="container">
      <Logo>
        <img src={Image} alt="" />
      </Logo>

      <form>
        <Row>
          <label>How Many Characters:</label>
          <Controls>
            <Btn>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </Btn>
            <span>0</span>
            <Btn>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
              </svg>
            </Btn>
          </Controls>
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

const Btn = styled.button`
  width: 100%;
  background: #684bff;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  vertical-align: top;
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: #866ffd;
  }
`;