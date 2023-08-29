import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './components/Home/Home';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';
import MuseumHistory from './components/MuseumHistory/MuseumHistory';
import Events from './components/Events/Events';
import Kavaleridze from './components/Kavaleridze/Kavaleridze';
import Tickets from './components/Tickets/Tickets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<MuseumHistory />} />
        <Route path="events" element={<Events />} />
        <Route path="about" element={<Kavaleridze />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="search" element={<Search />} />
        <Route path="tickets" element={<Tickets />} />
      </Route>
    </Routes>
  );
}

export default App;
