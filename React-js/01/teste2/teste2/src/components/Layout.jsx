import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'
import FloatingLogo from './BgLogo'

function Layout(){
    return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        <FloatingLogo />
    </>
    )
}

export default Layout