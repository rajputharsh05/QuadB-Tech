
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="root">
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;