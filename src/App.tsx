import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Contacts from './components/main/Contacts/Contacts';
import Donation from './components/main/Donation/Donation';
import Event from './components/main/Event/Event';
import Events from './components/main/Events/Events';
import Home from './components/main/Home/Home';
import Artist from './components/main/Kavaleridze/Artist/Artist';
import Biography from './components/main/Kavaleridze/Biography/Biography';
import Kavaleridze from './components/main/Kavaleridze/Kavaleridze';
import Kyiv from './components/main/Kavaleridze/Kyiv/Kyiv';
import Movie from './components/main/Kavaleridze/Movie/Movie';
import Sculpture from './components/main/Kavaleridze/Sculpture/Sculpture';
import MuseumHistory from './components/main/MuseumHistory/MuseumHistory';
import NotFoundPage from './components/main/NotFoundPage/NotFoundPage';
import Search from './components/main/Search/Search';
import Tickets from './components/main/Tickets/Tickets';
import MainSharedLayout from './components/SharedLayout/MainSharedLayout';
import AdminSharedLayout from './components/SharedLayout/AdminSharedLayout';
import Login from './components/admin/Login/Login';
import AddEvent from './components/admin/AddEvent/AddEvent';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainSharedLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<MuseumHistory />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:title" element={<Event />} />
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
        <Route path="*" element={<Navigate to={'404'} />} />
        <Route path="404" element={<NotFoundPage />} />
      </Route>
      <Route path="admin" element={<AdminSharedLayout />}>
        <Route index element={<AddEvent />} />
      </Route>
      <Route path="admin/login" element={<Login />} />
    </Routes>
  );
}

export default App;
