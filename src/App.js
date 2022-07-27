
import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetups/>}/>
        <Route path="new-meetup" element={<NewMeetup/>}/>
        <Route path="favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
