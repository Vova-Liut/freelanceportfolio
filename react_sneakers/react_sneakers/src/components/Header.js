

function Header() {
    return(
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
    );
}

export default Header;