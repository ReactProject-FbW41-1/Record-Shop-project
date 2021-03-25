import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import UserContext from "./ContextFolder/Context";
import { HashRouter, Route, Switch } from "react-router-dom";

//! Components
import Navbar from "./Components/Navbar/MyNavbar";
import Carousel from "./Components/Carousel/Carousel";
import PopUp from "./Components/PopUp/LoginPopup";
import MainAlbumContainer from "./Components/AlbumPage/MainAlbumContainer";
import AlbumPage from "./Components/AlbumPage/AlbumPageContainer";
// contact, do not forget to add ur packages, you can find them in description!
import Contacts from "./Components/ContactForm/Contacts";
import Footer from "./Components/Footer/Footer";
import Payment from "./Components/Payment/Payment";

function App() {
  const context = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <HashRouter basename="/">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Navbar />
        <div className=" switch-checkbox">
          <button type="submit" class="btn btn-light">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            Light-Dark
          </button>
        </div>
        <Switch>
          <Route path="/" exact>
            <Carousel />
            {context.myStateData.popUp ? <PopUp></PopUp> : null}
            <MainAlbumContainer />
          </Route>
          <Route path="/bestsellers" exact></Route>
          <Route path="/album" component={AlbumPage} />
          <Route path="/payment" exact>
            <Payment></Payment>
          </Route>
        </Switch>
        <Contacts />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
