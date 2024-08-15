import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import RecuperarSenha from './pages/recuperarsenha/RecuperarSenha';
import AlterarSenha from './pages/alterarsenha/AlterarSenha';
import CadastrarUsuario from './pages/cadastro/CadastrarUsuario';

function App() {
  return (
    <>
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' Component={Login} element={<SimpleLayout><Login/></SimpleLayout>}/>
          <Route path='/cadastrarusuario' Component={CadastrarUsuario} element={<DefaultLayout><CadastrarUsuario/></DefaultLayout>}/>
          <Route path='/recuperarsenha' Component={RecuperarSenha} element={<SimpleLayout><RecuperarSenha/></SimpleLayout>}/>
          <Route path='/alterarsenha' Component={AlterarSenha} element={<SimpleLayout><AlterarSenha/></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
      {/* Footer */}
    </>
  );
}

export default App;
