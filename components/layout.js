import Footer from "./footer";
import Navbar from "./navbar.";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            {/* <div className="content"> */}
                {children}
            {/* </div> */}
            <Footer />
        </div>
    );
}

export default Layout;