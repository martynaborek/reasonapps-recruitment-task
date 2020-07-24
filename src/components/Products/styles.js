import styled from 'styled-components';

import star from '../../assets/images/icon-star.svg';
import starIsActive from '../../assets/images/icon-star-active.svg';

const StyledProductsList = styled.div`
  padding: 2rem 2rem 0 2rem;
  >.products-list {
    margin: 0 0 12rem 0;
    padding: 0;
  }
  >.products-informations {
    padding: 1.5rem 1.5rem 1.5rem 6.7rem;
    margin: 2rem 0;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.name {
      color: #000;
      margin: 0;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  >.statement {
    margin: 4rem 0;
    font-size: 1.6rem;
    color: #FFC44B;
    text-align: center;
  }
`;

const StyledProductItem = styled.li`
    display: block;
    width: 100%;
    padding: 1.5rem 1.5rem 1.5rem 2.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ECEFF3;
    border-radius: 5px;
    >.item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      >.product-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          >.product-info {
            display: flex;
            flex-direction: column;
            >.name {
              font-size: 1.8rem;
              color: #000;
              margin: 0;
            }
            >.description {
              margin: 0;
              color: #A5A9AF;
              font-size: 1.4rem;
              font-weight: 300;
            }
          }
      }
      >.product-shop-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        >.price {
           font-weight: 500;
           color:  #4D61E0;
           margin: 0;
           margin-right: 2rem;
         }
         >.btn-add {
          border: none;
          position: relative;
          background: #0918FF;
          width: 5rem;
          height: 3rem;
          border-radius: 10px;
          > span {
            position: absolute;
            top: 34%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 1.9rem;
          }
         }
      }
    }
 `;

const StyledButtonFavorite = styled.button`
   border: none;
   background ${props => props.isActive ? `url('${starIsActive}')` : `url('${star}')`} no-repeat center;
   background-size: 100% 100%;
   padding: 0;
   width: 2.2rem;
   height: 2.2rem;
   margin-right: 2rem;
   outline: none;
`;



export { StyledProductsList, StyledProductItem, StyledButtonFavorite };
