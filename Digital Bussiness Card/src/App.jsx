import Info from "./components/Info";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import About from "./components/About";

export default function App() {
    return (
        <>
            <Info />
            <main>
                <About />
                <Interests />
            </main>
            <Footer />
        </>
    );
}
