import './Sidebar.css'
import logo from '../../assets/DecorComics_logo.png'
import { FaHome } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';
import { FaProductHunt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaReceipt } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';

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
        <div className='sidebar-menu'>
            <h2>Usuário: DecorComics</h2>   
            <div className='sidebar-link active-menu-link'>
                <AiFillDashboard />
                <a href='#'> Dashboard </a>    
            </div>  

            <div className='sidebar-link'>
                <FaUser />
                <a href='#'> Clientes </a>    
            </div> 
            <div className='sidebar-link'>
                <FaTruck />
                <a href='#'> Fornecedores </a>    
            </div>
            <div className='sidebar-link'>
                <FaUserCircle />
                <a href='#'> Funcionários </a>    
            </div>
            <div className='sidebar-link'>
                <FaProductHunt />
                <a href='#'> Produtos </a>    
            </div>
            <div className='sidebar-link'>
                <FaCartPlus />
                <a href='#'> Vendas </a>    
            </div>
            <div className='sidebar-link'>
                <FaMoneyBill />
                <a href='#'> Contas a Pagar </a>    
            </div>
            <div className='sidebar-link'>
                <FaReceipt />
                <a href='#'> Contas a Receber </a>    
            </div> 
            <div className='sidebar-link'>
                <FaBuilding />
                <a href='#'> Banco </a>    
            </div>
            <div className='sidebar-link'>
                <FaMoneyCheck />
                <a href='#'> Forma de Pagamento </a>    
            </div>
            <div className='sidebar-logout'>
                <FaShopify />
                <a href='#'> Sair </a>    
            </div>     
        </div>
    </div>
    )
}

export default Sidebar;