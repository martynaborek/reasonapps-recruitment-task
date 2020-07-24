import styled from 'styled-components';

import { device } from '../../../styles/mediaQueries';

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #1a1a21;
  padding: 2rem;
  >.info {
    >.logo {
       width: 16rem;
       height: auto;
       @media ${device.desktop} { 
        width: 26rem;
       }
      }
    >.title {
      color: #fff;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 300;
      @media ${device.desktop} { 
        font-size: 1.4rem;
       }
     }
    }
  }
  >.rights{
    color: #fff; 
    font-size: 1.5rem;
    font-weight: 300;
    text-align: right;
    margin: 0 0 0 1.5rem;
  }
`;

export { StyledFooter }
