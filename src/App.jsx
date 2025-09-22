import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero-Section/Hero-Section";
import AvailablePLayers from "./components/AvailablePlayers/AvailablePLayers";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
import { Suspense, useState } from "react";
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
function App() {
  const playersPromise = fetchPlayers();

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <div className="flex justify-between px-[30px] py-[15px]">
          <h1 className="font-bold text-2xl">Available Players</h1>
          <div className="">
            <button onClick={()=>setToggle(true)} className={`btn ${toggle===true?"bg-[#E7FE29]":''} px-[30px] py-[20px] rounded-l-2xl border-1 border-gray-200 border-r-0`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`btn ${toggle===false?"bg-[#E7FE29]":''} px-[30px] py-[20px] rounded-r-2xl border-1 border-gray-200 border-r-0`}>
              Selected <span>(0)</span>
            </button>
          </div>
        </div>

        {
          toggle=== true? <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl mx-auto ml-[650px]"></span>
          }
        >
          <AvailablePLayers playersPromise={playersPromise}></AvailablePLayers>
        </Suspense>:<Suspense fallback={<span className="loading loading-spinner loading-xl mx-auto ml-[650px]"></span>}><SelectedPlayers></SelectedPlayers></Suspense>
        }



        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
