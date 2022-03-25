import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Gallery from './pages/Gallery';
import Hari from './pages/Hari';

function App() {
  return (
    <div className="flex justify-center p-5 w-screen h-screen bg-zinc-400 overflow-y-auto">
      <div className='max-w-md'>
        <div className='flex items-center justify-center mb-8 text-xs text-zinc-900 font-semibold uppercase tracking-wide'>
          {/** Link untuk menampilkan navbar yang akan ditampilkan */}
          {/** Halaman HTML */}
          <Link className='mx-4 px-6 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'
          to="/beranda">
          Beranda
          </Link>
        
          <Link className='mx-4 px-6 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'
          to="/gallery">
          Gallery
          </Link>

          <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out'
          to="/hari">
          Hari Besar
          </Link>

        </div>
        {/**routes/ halamat route */}
        <div>
        <Routes>
          <Route path="/Beranda" element={< Beranda />}> </Route>
          <Route path="/Gallery" element={< Gallery />}> </Route>
          <Route path="/Hari" element={< Hari />}> </Route>

        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
