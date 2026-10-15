import { Outlet } from 'react-router-dom';

import Footer from './components/footer';

export default function Root() {
    return (
        <>
        <div id="content"><Outlet /></div>
        <Footer />
        </>
    )
}