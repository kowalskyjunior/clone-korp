import '../App.css'

function Footer(){
    return <footer className='sec-footer'>
        <div className='container'>
            <div className='footer-wraper'>

                <div className='footer-single'>
                    <h2>
                        SOBRE
                    </h2>
                    <p>O sistema Viasoft Korp ERP nasceu dentro da indústria. Estamos desde 1999 no mercado industrial desenvolvendo e evoluindo nossas soluções com foco na agilidade e aumento da lucratividade deste segmento.</p>
                </div>

                <div className='footer-single footer-empresa'>
                    <h2>
                        EMPRESA
                    </h2>
                    <p>Korp ERP</p>
                    <p>Manual do ERP</p>
                    <p>Suporte</p>
                </div>

                <div className='footer-single footer-contato'>
                    <h2>
                        CONTATO
                    </h2>
                    <p>comercial@korp.com.br</p>
                    <p>Whatsapp</p>
                    <p>Solicite uma proposta</p>
                    <p>Universidade</p>
                    <p>Trabalhe conosco</p>
                </div>

                <div className='footer-single footer-social'>
                    <h2>
                        SIGA NOSSAS REDES:
                    </h2>
                    <span><img src='https://i2.wp.com/www.korp.com.br/wp-content/themes/korp2022/images/icones/facebook.png?w=26'/></span>
                    <span><img src='https://i2.wp.com/www.korp.com.br/wp-content/themes/korp2022/images/icones/facebook.png?w=26'/></span>
                    <span><img src='https://i2.wp.com/www.korp.com.br/wp-content/themes/korp2022/images/icones/facebook.png?w=26'/></span>
                    <span><img src='https://i2.wp.com/www.korp.com.br/wp-content/themes/korp2022/images/icones/facebook.png?w=26'/></span>

                </div>

            </div>

            <div className='footer-final'>
                <img src='https://i2.wp.com/www.korp.com.br/wp-content/themes/korp2022/images/viasoft.png?w=600'/>
                <p>2023 © Korp ERP - Todos os direitos Reservados</p>
            </div>
        </div>
    </footer>
}

export default Footer;