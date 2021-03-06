import styled from 'styled-components';
import * as palette from './colors';

export const Title = styled.a`
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 1px;
  display: block;
  color: ${props => props.theme === 'light' ? `${palette.BLACK2}` : `${palette.WHITE}`};
  transition: all .5s;
  &:hover {
    color: ${palette.ORANGE};
    cursor: pointer;
  }
`;
