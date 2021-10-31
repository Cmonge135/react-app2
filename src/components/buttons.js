import React from 'react';
import styled from 'styled-components';

export const DecreaseBtn = ({click}) => {
    return (
        <Btn onClick={click}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
        </Btn>
    );
}

export const IncreaseBtn = ({click}) => {
    return (
        <Btn onClick={click}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        </Btn>
    );
}

export const CheckBtn = ({selected, click}) => {
    if(selected){
        return (
            <Btn onClick={click}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
            </Btn>
        );
    } else {
        return (
            <UncheckBtn onClick={click}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </UncheckBtn>
        );
    }
}

export const GenerateBtn = () => {
    return (
        <GenerateBtnLock type="submit">
            Generate
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
            </svg>
        </GenerateBtnLock>
    )
}

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

const GenerateBtnLock = styled(Btn)`
  svg {
      margin-left: 10px;
  }
`;

const UncheckBtn = styled(Btn)`
  background: #33257e;

  &:hover {
      background; #33257e;
  }
`;
