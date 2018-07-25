import styled from 'styled-components';
import * as palette from './colors';

const Input = styled.input`
  background: transparent;
  box-sizing: border-box;
  border: 1px solid ${palette.WHITE};
  color: ${palette.WHITE};
  font-size: 23px;
  min-width: 100px;
  outline: none;
  padding: 10px 15px;
  width: 83%;
  @media screen and (max-width: 730px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default Input;
