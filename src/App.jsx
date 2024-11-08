import "./styles/global.scss";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
