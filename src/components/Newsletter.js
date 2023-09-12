import '../App.css'

function Newsletter(){
    return <section className='sec-newsletter'>
        <div className='container'>
            <h2>ASSINE NOSSA NEWSLETTER</h2>
            <p>Receba informações e novidades sobre nossos segmentos módulos e muito mais.</p>
            <input type='email' placeholder='Insira seu e-mail aqui'/>
            <input type='submit' value={'ENVIAR'}/>
        </div>
    </section>
}

export default Newsletter;