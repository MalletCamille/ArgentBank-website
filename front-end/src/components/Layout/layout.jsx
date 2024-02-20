import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import {Fragment} from 'react'



function Layout({children}) {
  return (
    <Fragment>
    <Header />
    {children}
    <Footer />
    </Fragment>
  );
}

export default Layout;
