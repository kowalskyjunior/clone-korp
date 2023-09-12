import '../App.css';

function Header(){ 
return <header> 
    <div className='container'>
       <nav>
        <div className='logo-image'>
            <img src='https://www.korp.com.br/wp-content/themes/korp2022/images/logo.webp'/>
        </div>

        <ul>
            <li style={{color: '#ff0c46'}}>Home</li>
            <li>Segmentos</li>
            <li>Soluções</li>
            <li>Implantação</li>
            <li>Sobre</li>
            <li>Blog</li>
            <li>Contato</li>
        </ul>
       </nav>
    </div>
</header>    

}   

export default Header;