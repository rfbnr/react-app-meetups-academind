
import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<AllMeetups/>}/>
        <Route path="new-meetup" element={<NewMeetup/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
