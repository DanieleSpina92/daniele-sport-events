import CamContainer from "./components/cam/CamContainer";
import EventsContainer from "./components/event/EventsContainer";
import { getEvents } from "./utils/Manager";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventsContainer lista={getEvents()} />}> </Route>
          <Route path="/cam/:eventID" element={<CamContainer/>} />
      </Routes>
    </BrowserRouter>    
        
  );
}

export default App;
