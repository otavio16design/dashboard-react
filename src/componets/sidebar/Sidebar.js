import './Sidebar.css'
import logo from '../../assets/DecorComics_logo.png'
import { FaHome } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';
import { FaProductHunt } from 'react-icons/fa';

const Sidebar = ({
    sidebarOpen,
    closeSidebar
}) => {
    return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-img'>
                <img src={logo} alt="logo" className='logo' />
                {/* <h1>DecorComics</h1> */}
            </div>
            <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id='sidebarIcon'
            aria-hidden="true"
            ></i>
        </div>
        <div className='sideba-menu'>
            <div className='sidebar-link active-menu-link'>
                <FaHome />
                <a href='#'> Início</a>    
            </div>         
            <h2>ADMIN</h2>  

            <div className='sidebar-link'>
                <AiFillDashboard />
                <a href='#'> Área Administrativa</a>    
            </div> 
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Lojas</a>    
            </div>
            <div className='sidebar-link'>
                <FaProductHunt />
                <a href='#'> Produtos</a>    
            </div>
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Categorias</a>    
            </div>
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Pedidos</a>    
            </div>

            <h2>PESSOAS</h2>
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Administradores</a>    
            </div> 
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Usuários</a>    
            </div> 
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Pagamentos e Custos</a>    
            </div> 
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> A Plataforma</a>    
            </div> 
            <div className='sidebar-link'>
                <FaShopify />
                <a href='#'> Política de Privacidade</a>    
            </div> 
            <div className='sidebar-logout'>
                <FaShopify />
                <a href='#'> Sair</a>    
            </div>     
        </div>
    </div>
    )
}

export default Sidebar;