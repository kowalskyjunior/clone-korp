import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function SectionBG() {
    return (
      <div className='sec-carrossel'>
        
        <Carousel controls={false}>
          <Carousel.Item>
            <div className='carrossel-section'>
            <div className='container'>
            <div className='carrossel-01'>
            <h2><span style={{color:'#ff0c46'}}>ERP ESPECIALISTA</span><br/>
EM INDÚSTRIA E <br/> DISTRIBUIÇÃO</h2>

<p>O Viasoft Korp ERP é o sistema de gestão desenvolvido para otimizar a produtividade e aumentar lucros de empresas que buscam evoluir com a ajuda da tecnologia de ponta.</p>

<button className='orcamento-btn'>SOLICITE UM ORÇAMENTO!</button></div>
</div>


            <img className='bg-section' style={{width:'100%'}}
              src="https://i2.wp.com/www.korp.com.br/wp-content/uploads/2022/03/807445.jpg?w=1343&ssl=1"
              alt="Image One"
            /></div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='carrossel-section'></div>
          <div className='container'>
            <div className='carrossel-02'>
            <h2><span style={{color:'#ff0c46'}}>ERP ESPECIALISTA</span><br/>
EM INDÚSTRIA E <br/> DISTRIBUIÇÃO</h2>

<p>O Viasoft Korp ERP é o sistema de gestão desenvolvido para otimizar a produtividade e aumentar lucros de empresas que buscam evoluir com a ajuda da tecnologia de ponta.</p>

<button className='orcamento-btn'>SOLICITE UM ORÇAMENTO!</button></div>
</div>
            <img className='bg-section' style={{width:'100%'}}
              src="https://i2.wp.com/www.korp.com.br/wp-content/uploads/2022/03/807445.jpg?w=1343&ssl=1"
              alt="Image Two"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div className='carrossel-section'>
          <div className='container'>
            <div className='carrossel-03'>
            <h2><span style={{color:'#ff0c46'}}>ERP ESPECIALISTA</span><br/>
EM INDÚSTRIA E <br/> DISTRIBUIÇÃO</h2>

<p>O Viasoft Korp ERP é o sistema de gestão desenvolvido para otimizar a produtividade e aumentar lucros de empresas que buscam evoluir com a ajuda da tecnologia de ponta.</p>

<button className='orcamento-btn'>SOLICITE UM ORÇAMENTO!</button></div>
</div>

            <img className='bg-section' style={{width:'100%'}}
              src="https://i2.wp.com/www.korp.com.br/wp-content/uploads/2022/03/807445.jpg?w=1343&ssl=1"
              alt="Image Two"
            /></div>
          </Carousel.Item>

        </Carousel>
      </div>
)}