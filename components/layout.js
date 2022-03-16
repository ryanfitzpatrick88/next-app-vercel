// components/layout.js

import Navbar from './navbar2.js'
import Footer from './footer.js'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}