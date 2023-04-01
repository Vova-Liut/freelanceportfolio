
import './App.scss';
import Card from './components/Card';

function App() {
    return (
        <div className="wrapper clear">
            <div style={{display: 'none'}} className="overlay">
                <div className="drawer">
                    <h2 className="d-flex justify-between mb-30">Корзина 
                            <img 
                            className="cu-p" 
                            src="/img/btn-remove.svg" 
                            alt="Remove" />
                        </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <div 
                            style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
                            className="cartItemImg">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 uah</b>
                            </div>
                            <img 
                            className="removeBtn" 
                            src="/img/btn-remove.svg" 
                            alt="Remove" />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <div 
                            style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
                            className="cartItemImg">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 uah</b>
                            </div>
                            <img 
                            className="removeBtn" 
                            src="/img/btn-remove.svg" 
                            alt="Remove" />
                        </div>
                        

                        <div className="cardTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 uah</b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 uah</b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ
                                <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>

                    </div>


                </div>
            </div>

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg" alt="cart" /> 
                        <spn>1205 uah</spn></li>
                    <li>
                        <img 
                        width={18} height={18} 
                        src="/img/user.svg" alt="cart" /> 

                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex">
                    <Card />

                    {/* <div className="card">
                        <img widrh={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">

                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 uah.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11}  src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img widrh={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">

                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 uah.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11}  src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img widrh={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">

                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>12 999 uah.</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11}  src="/img/plus.svg" alt="plus" />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default App;
