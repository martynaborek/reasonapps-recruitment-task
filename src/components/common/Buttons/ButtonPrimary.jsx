import React from 'react';

import { StyledButtonPrimary } from './style';

const ButtonPrimary = ({ text, biggerSize, onClick, isInactive }) => {
    return (
        <StyledButtonPrimary size={biggerSize} onClick={onClick} isInactive={isInactive}>
            <span>{text}</span>
        </StyledButtonPrimary>
    );
};

export default ButtonPrimary;
