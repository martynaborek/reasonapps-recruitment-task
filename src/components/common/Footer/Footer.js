import React from 'react';

// img
import logo from "../../../assets/images/logo.svg";

// styles
import { StyledFooter } from './styles';

const Footer = () => {
    return (
        <div className="row">
            <div className="col p-0">
                <StyledFooter>
                    <div className="info">
                        <h2 className="title">Recruitment task</h2>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <p className="rights">Copyright &copy; 2020, Martyna Borek. All Rights Reserved.</p>
                </StyledFooter>
            </div>
        </div>
    );
};

export default Footer;
