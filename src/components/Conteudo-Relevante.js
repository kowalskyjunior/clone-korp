import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import '../App.css'
  
export default function Conteudo() {
  return (
    <section className='sec-conteudo'>
    <div className='container'>
     <div className='conteudo-titulo'>
      <h2>CONTEÚDO RELEVANTE</h2>
        <p>Conteúdos memoráveis para auxiliar os seus procesos operacionais e administrativos e, consequentemente, os resultados da sua empresa!</p>
     </div>
      <Carousel interval={5000}>
        <Carousel.Item>
        <div className='carrossel-conteudo'>
          <img src='https://i2.wp.com/www.korp.com.br/wp-content/uploads/2023/08/694688.jpg?w=303'
            alt="Image One"
          />
          <h2>Relatório de vendas: o que é e como analisar seus resultados</h2>
          <p>O relatório de vendas é o documento que permite a análise dos resultados da área…</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrossel-conteudo'>
          <img src='https://i2.wp.com/www.korp.com.br/wp-content/uploads/2023/08/694688.jpg?w=303'
            alt="Image One"
          />
          <h2>Relatório de vendas: o que é e como analisar seus resultados</h2>
          <p>O relatório de vendas é o documento que permite a análise dos resultados da área…</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrossel-conteudo'>
          <img src='https://i2.wp.com/www.korp.com.br/wp-content/uploads/2023/08/694688.jpg?w=303'
            alt="Image One"
          />
          <h2>Relatório de vendas: o que é e como analisar seus resultados</h2>
          <p>O relatório de vendas é o documento que permite a análise dos resultados da área…</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrossel-conteudo'>
          <img src='https://i2.wp.com/www.korp.com.br/wp-content/uploads/2023/08/694688.jpg?w=303'
            alt="Image One"
          />
          <h2>Relatório de vendas: o que é e como analisar seus resultados</h2>
          <p>O relatório de vendas é o documento que permite a análise dos resultados da área…</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrossel-conteudo'>
          <img src='https://i2.wp.com/www.korp.com.br/wp-content/uploads/2023/08/694688.jpg?w=303'
            alt="Image One"
          />
          <h2>Relatório de vendas: o que é e como analisar seus resultados</h2>
          <p>O relatório de vendas é o documento que permite a análise dos resultados da área…</p>
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </section>
  );
}