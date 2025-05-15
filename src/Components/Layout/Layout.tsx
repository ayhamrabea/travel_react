import { Outlet } from 'react-router-dom';
import { Navbar } from "../Navbar/Navbar";
import { Footer } from '../Footer/Footer';

export const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};