import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './components/Home/Home';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Search from './components/Search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
