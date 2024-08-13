import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Cadastro from './pages/cadastro/Cadastro';
import RecuperarSenha from './pages/recuperarsenha/RecuperarSenha';

function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' Component={Login} element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/cadastro' Component={Cadastro} element={<SimpleLayout><Cadastro/></SimpleLayout>}/>
          <Route path='/recuperarsenha' Component={RecuperarSenha} element={<SimpleLayout><RecuperarSenha/></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </>
  );
}

export default App;
