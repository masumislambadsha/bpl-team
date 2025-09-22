import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero-Section/Hero-Section";
import AvailablePLayers from "./components/AvailablePlayers/AvailablePLayers";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";

// const fetchPlayers = async () => {
//   const res = await fetch("/Players.json");
//   return res.json();
// };
function App() {
  // const playersPromise = fetchPlayers();
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
         <Navbar></Navbar>
        {/*<HeroSection></HeroSection>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl mx-auto ml-[650px]"></span>
          }
        >
          <AvailablePLayers playersPromise={playersPromise}></AvailablePLayers>
        </Suspense> */}

        {/* <SelectedPlayers></SelectedPlayers> */}
          <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
