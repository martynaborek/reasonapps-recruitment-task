import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/globalStyles';
import Footer from "./components/common/Footer";

const App = () => {
  return (
      <div className="container-fluid">
          <GlobalStyles />
          <Routes />
          <Footer />
      </div>
  );
}

export default App;
