import './App.css';
import Actionbar from './components/Actionbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import CommodityList from './components/CommodityList';

function App() {
  return (
    <div className="app">
    <Header />
    <div className="public-news">
      Public News: &nbsp;For Support, Call +91 8918085080 (Whatsapp only)
    </div>
    <Actionbar />
    <Searchbar />
    <CommodityList />
    <Footer />
  </div>
  )
}

export default App;
