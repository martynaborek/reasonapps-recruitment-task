import styled from 'styled-components';

import { device } from '../../../styles/mediaQueries';

const StyledHeader = styled.div`
    padding: 0 2rem;
    border-bottom: 1px solid #ECEFF3;
    >.title {
        padding: 2.5rem 0;
        font-size: 3rem;
        font-weight: 900;
        border-bottom: 1px solid #ECEFF3;
        color: #000;
        margin: 0;
        @media ${device.tablet} { 
        font-size: 4.5rem;
       }
    }
    >.categories{
        >.categories-wrapper {
            display: flex;
            justify-content: flex-start;
            >.button {
                display: flex;
                min-width: 50%;
                justify-content: center;
                align-items: center;
                padding: 2rem 0;
                @media ${device.tablet} { 
                  justify-content: flex-start;
                  min-width: 20rem;
                }
                >.text {
                    font-size: 1.2rem;
                    color: #000;
                    font-weight: 600;
                    margin: 0 0.7rem 0 0;
                    @media ${device.tablet} { 
                      font-size: 1.5rem;
                    }
                }
                >.quantity {
                    position: relative;
                    width: 3.4rem;
                    height: 2rem;
                    background: #0918FF;
                    border-radius: 5px;
                    @media ${device.tablet} { 
                       width: 3.7rem;
                       height: 2.3rem;
                    }
                    > span{
                        position: absolute;
                        top: 41%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: block;
                        font-size: 1rem;
                        color: #fff;
                        font-weight: 600;
                        @media ${device.tablet} { 
                          top: 39%;
                          font-size: 1.3rem;
                        } 
                    }
                }
            }
        }
    }
 `;

 export { StyledHeader };
