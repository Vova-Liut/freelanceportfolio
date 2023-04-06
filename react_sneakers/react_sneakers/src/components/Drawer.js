

function Drawer({ onClose, items = [] }) {
    return (
        <div  className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина 
                        <img onClick={onClose}
                        className="cu-p" 
                        src="/img/btn-remove.svg" 
                        alt="Remove" />
                    </h2>

                <div className="items">

                {items.map((item) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div 
                            style={{backgroundImage: `url(${item.imageUrl})`}} 
                            className="cartItemImg">
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{item.title}</p>
                                <b>{item.price}</b>
                            </div>
                            <img 
                            className="removeBtn" 
                            src="/img/btn-remove.svg" 
                            alt="Remove" />
                        </div>
                    ))}

{console.log(items)};
                    

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
    );
}

export default Drawer;