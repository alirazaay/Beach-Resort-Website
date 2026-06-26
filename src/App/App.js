// App.js
import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components that are always visible — NOT lazy loaded
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import Loading from "../Components/Loading/Loading";

/**
 * FEATURE: React.lazy() + React.Suspense — Lazy-loaded pages
 * -----------------------------------------------------------
 * Why: Without lazy loading, ALL page code (Home, Room, SingleRoom, Error,
 *      About, Contact) is bundled into one large JavaScript file that must
 *      download before the user sees anything.
 *
 * With lazy loading:
 *   - Each page becomes its own code chunk
 *   - The browser only downloads the code for the current page
 *   - Subsequent pages are fetched on demand (often pre-fetched in background)
 *   - Initial load is significantly faster — critical for mobile users
 *
 * React.Suspense: Displays a fallback (the Loading component) while the
 * lazy chunk is being downloaded and parsed.
 */
const Home = lazy(() => import("../Pages/Home"));
const Room = lazy(() => import("../Pages/Room"));
const SingleRoom = lazy(() => import("../Pages/SingleRoom"));
const Error = lazy(() => import("../Pages/Error"));
const About = lazy(() => import("../Components/About/About"));
const ContactUs = lazy(() => import("../Components/Contact/Contact"));

function App() {
  return (
    <>
      <Navbar />
      {/* FEATURE: ScrollToTop — smoothly scrolls to top on every route change */}
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Room} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactUs} />
          <Route component={Error} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
