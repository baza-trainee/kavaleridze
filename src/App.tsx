import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';
import MuseumHistory from './components/MuseumHistory/MuseumHistory';
import Events from './components/Events/Events';
import Kavaleridze from './components/Kavaleridze/Kavaleridze';
import Tickets from './components/Tickets/Tickets';
import Artist from './components/Kavaleridze/Artist/Artist';
import Movie from './components/Kavaleridze/Movie/Movie';
import Sculpture from './components/Kavaleridze/Sculpture/Sculpture';
import Biography from './components/Kavaleridze/Biography/Biography';
import Kyiv from './components/Kavaleridze/Kyiv/Kyiv';
import Donation from './components/Donation/Donation';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<MuseumHistory />} />
        <Route path="events" element={<Events />} />
        <Route path="about" element={<Kavaleridze />}>
          <Route path="artist" element={<Artist />} />
          <Route path="biography" element={<Biography />} />
          <Route path="movie" element={<Movie />} />
          <Route path="sculpture" element={<Sculpture />} />
          <Route path="kyiv" element={<Kyiv />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="search" element={<Search />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="donation" element={<Donation />} />
      </Route>
    </Routes>
  );
}

export default App;
