import styled from 'styled-components';

import { device } from "../../../styles/mediaQueries";

const StyledButtonPrimary = styled.button`
   border: none;
   position: relative;
   background-color: ${props => props.isInactive ? '#ccc' : '#0918FF'};
   width ${props => props.theme.width};
   height ${props => props.theme.height};
   border-radius: 10px;
   box-shadow: ${props => props.isInactive ? 'none' : '0px 24px 36px -20px rgba(9,24,255,1)'};
   margin: ${props => props.theme.margin};
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: ${props => props.isInactive ? '0.2' : '1'};
   > span {
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.2;
    @media ${device.desktop} { 
        font-size: 1.9rem;
       }
   }
`;

StyledButtonPrimary.defaultProps = {
    theme: {
        width: '5rem',
        height: '3rem',
        margin: '0',
    }
}

export { StyledButtonPrimary };
