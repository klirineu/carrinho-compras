import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Abaixo10 } from './pages/Abaixo10';
import { Acima10 } from './pages/Acima10';

export function CartRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Abaixo10/>} />
        <Route path="Acima10" element={<Acima10/>} />
      </Routes>
  )
}