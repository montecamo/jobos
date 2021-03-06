import styled from 'styled-components';
import * as palette from './colors';

export const Page = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid ${palette.ORANGE};
  background: ${props => props.focused ? 'transparent' : `${palette.ORANGE}`};
  display: inline-block;
  box-sizing: border-box; 
  color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
  font-family: 'Lato', sans-serif;
  transition: all .5s;
  outline: none;
  margin: 0 2px;
  padding: 0;
  text-align: center;
  &:hover {
    background: transparent;
    cursor: pointer;
  }
  &:focus {
    background: transparent;
  }
  $:active {
    border: 1px solid ${props => props.theme === 'light' ? `${palette.WHITE}` : `${palette.BLACK2}`};
  }
`;
