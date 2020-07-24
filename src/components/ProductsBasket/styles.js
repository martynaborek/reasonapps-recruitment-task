import styled from 'styled-components';

const StyledBasket = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 0 2rem;
  >.header {
    padding: 2.5rem 0;
        font-size: 2.8rem;
        font-weight: 900;
        border-bottom: 1px solid #ECEFF3;
        color: #000;
        margin: 0;
  }
  >.picked-products {
    padding: 2.5rem 0;
    >.info {
      font-size: 1.6rem;
      margin: 0;
      text-align: center;
      line-height: 1.2;
    }
     border-bottom: 1px solid #ECEFF3;
  }
  >.summary {
    > p {
        margin: 0;
    }
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  >.statement {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const StyledItemInBasket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  >.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    >.name {
      margin-left: .8rem;
      color: #000;
      font-weight: bold;
    }
    >.price {
      font-weight: bold;
      margin-right: .5rem;
    }
  }
`;


export { StyledBasket, StyledItemInBasket };
