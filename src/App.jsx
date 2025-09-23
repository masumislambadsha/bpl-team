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
const playersPromise = fetchPlayers();
function App() {

  const [toggle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(6000000)

  const [selectedPlayers , setSelectedPlayers] = useState([])
  // if(selectedPlayers.length > 6){
  //   alert('you have taken maxmimum players ')
  //   return
  // }
  // console.log(selectedPlayers)

  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <HeroSection></HeroSection>
        <div className="flex justify-between px-[30px] py-[15px]">
          <h1 className="font-bold text-2xl">{toggle===true?"Available Players":`Selected Players ${selectedPlayers.length}/6`}</h1>
          <div className="">
            <button onClick={()=>setToggle(true)} className={`btn ${toggle===true?"bg-[#E7FE29]":''} px-[30px] py-[20px] rounded-l-2xl border-1 border-gray-200 border-r-0`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`btn ${toggle===false?"bg-[#E7FE29]":''} px-[30px] py-[20px] rounded-r-2xl border-1 border-gray-200 border-r-0`}>
              Selected <span>({selectedPlayers.length})</span>
            </button>
          </div>
        </div>
        {
          toggle=== true? <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl mx-auto ml-[650px]"></span>
          }
        >
          <AvailablePLayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} availableBalance={availableBalance} playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></AvailablePLayers>
        </Suspense>:<Suspense fallback={<span className="loading loading-spinner loading-xl mx-auto ml-[650px]"></span>}><SelectedPlayers
        selectedPlayers={selectedPlayers}></SelectedPlayers></Suspense>
        }



        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
