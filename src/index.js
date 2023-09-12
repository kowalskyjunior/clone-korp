import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header'
import SectionBG from './components/Section-bg';
import reportWebVitals from './reportWebVitals';
import SectionInterview from './components/Section-interview';
import Empresas from './components/Empresas';
import Segmentos from './components/Segmentos';
import Nuvem from './components/Nuvem'
import Modulos from './components/Modulos'
import Gestao from './components/Gestao'
import Metodologia from './components/Metodologia';
import Conteudo from './components/Conteudo-Relevante';
import Newsletter from './components/Newsletter';
import Informacoes from './components/Informacoes';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <SectionBG/>
    <SectionInterview/>
    <Empresas/>
    <Segmentos/>
    <Nuvem/>
    <Modulos/>
    <Gestao/>
    <Metodologia/>
    <Conteudo/>
    <Newsletter/>
    <Informacoes/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
