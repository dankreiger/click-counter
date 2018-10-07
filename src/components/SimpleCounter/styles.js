import styled from 'styled-components';

export const SimpleCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .counter {
    font-size: 72px;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0px 0px 4px #999;
  }
  button {
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 2em;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 24px;
    background-position: center;
    transition: background 0.8s;
    color: #fff;
    background-color: #2196f3;
    box-shadow: 0 0 4px #999;
    outline: none;
    &:hover {
      background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
        (center / 15000%);
    }
    &:active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
  }
`;
