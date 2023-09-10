
// import './assets/styles/App.css';
 import styles from './App.Module.scss';


import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
    <Header />
    <Content />
    <Footer />
    </div>
  );
}

export default App;
