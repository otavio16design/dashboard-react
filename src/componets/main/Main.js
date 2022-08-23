import hello from "../../assets/avatar.png";
import Chart from "../charts/Chart";
import './Main.css';
import { FaFile } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaChartArea } from 'react-icons/fa';

const Main = () => {
    return (
        // <main>
        //     <div className="main-container">
        //         <div className="main-title">
        //             <img src={hello} alt="hello" />
        //             <div className="main-greeting">
        //                 <h1>Olá DecorComics</h1>
        //                 <p>Bem vindo ao seu painel!</p>
        //             </div>
        //         </div>
        //         <div className="main-cards">
        //             <div className="card">
        //                 <FaFile style={{ color: "lightblue" }} />
        //                 <div className="card-inner">
        //                     <p className="text-primary-p">Número de Pedidos</p>
        //                     <sán className="font-bold text-title">558</sán>
        //                 </div>
        //             </div>

        //             <div className="card">
        //                 <FaMoneyBill style={{ color: "red" }} />
        //                 <div className="card-inner">
        //                     <p className="text-primary-p"> Pagamentos</p>
        //                     <span className="font-bold text-title"> R$4.567,78 </span>
        //                 </div>
        //             </div>

        //             <div className="card">
        //                 <FaArchive style={{ color: "yellow" }} />
        //                 <div className="card-inner">
        //                     <p className="text-primary-p"> Número de Produtos</p>
        //                     <span className="font-bold text-title"> 615 </span>
        //                 </div>
        //             </div>

        //             <div className="card">
        //                 <FaBars style={{ color: "green" }} />
        //                 <div className="card-inner">
        //                     <p className="text-primary-p"> Categorias</p>
        //                     <span className="font-bold text-title"> 23 </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
        <main>
            <div className="main-container">
                <div className="main-title">
                    <img src={hello} alt="hello" />
                        <div className="main-greeting">
                            <h1> Olá DecorComics! </h1>
                            <p> Bem vindo ao seu painel! </p>
                        </div>
                </div>
                    <div className="main-cards">
                        <div className="card">
                            <FaFile style={{ color: "lightblue" }} />
                            <div className="card-inner">
                                <p className="text-primary-p"> Número de Pedidos</p>
                                <span className="font-bold text-title"> 578 </span>
                            </div>
                        </div>

                        <div className="card">
                            <FaMoneyBill style={{ color: "red" }} />
                            <div className="card-inner">
                                <p className="text-primary-p"> Pagamentos</p>
                                <span className="font-bold text-title"> R$4.567,78 </span>
                            </div>
                        </div>

                        <div className="card">
                            <FaArchive style={{ color: "yellow" }} />
                            <div className="card-inner">
                                <p className="text-primary-p"> Número de Produtos</p>
                                <span className="font-bold text-title"> 615 </span>
                            </div>
                        </div>

                        <div className="card">
                            <FaBars style={{ color: "green" }} />
                            <div className="card-inner">
                                <p className="text-primary-p"> Categorias</p>
                                <span className="font-bold text-title"> 23 </span>
                            </div>
                        </div>
                    </div>

                        <div className="charts">
                            <div className="charts-left">
                                <div className="charts-left-title">
                                    <div>
                                        <h1>Daily Reports</h1>
                                        <p>Americana</p>
                                    </div>
                                    <FaDollarSign />
                                </div> 
                                <Chart />
                            </div> 

                            <div className="charts-right">
                                <div className="charts-right-title">
                                    <div>
                                        <h1>Daily Reports</h1>
                                        <p>Americana</p>
                                    </div>
                                    <FaChartArea />
                                </div> 

                            <div className="charts-right-cards">
                                <div className="card1">
                                    <h1> Lucro </h1>
                                    <p> R$2.578,54 </p>
                                </div>

                            <div className="card2">
                                <h1> Pagamentos </h1>
                                <p> R$250,00 </p>
                            </div>

                            <div className="card3">
                                <h1> Custos de Hospedagem </h1>
                                <p> R$150,00 </p>
                            </div>

                            <div className="card4">
                                <h1> Banco de Dados </h1>
                                <p> R$180,00 </p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </main>
    )
}

export default Main;