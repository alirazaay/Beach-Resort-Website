// App.js
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Import AboutComponent and ContactUsComponent
import About from "../Components/About/About"; // Update the path if necessary
import ContactUs from "../Components/Contact/Contact"; // Update the path if necessary

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        {/* Add routes for About and Contact Us */}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
