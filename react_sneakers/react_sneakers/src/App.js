import React from 'react';

import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

import './App.scss';

// const arr = [
//     {
//         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: 12999,
//         imageUrl: '/img/sneakers/1.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Air Max 270',
//         price: 11500,
//         imageUrl: '/img/sneakers/2.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: 10500,
//         imageUrl: '/img/sneakers/3.jpg'
//     },
//     {
//         title: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: 13500,
//         imageUrl: '/img/sneakers/4.jpg'
//     }
// ]



function App() {

    const [items, setItems] = React.useState([]);

    const [cartOpened, setCartOpened] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([]);

    const url = 'https://mocki.io/v1/872f5152-22e1-46cd-afc0-9d84e024a11d';

    React.useEffect(() => {
        fetch(url).then((res) => {
            return res.json();
        }).then(json => {
            setItems(json)
        });
    }, [])

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...prev, obj])
    }

    console.log(cartItems);




    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        items.map((item) => (
                            <Card 
                                title={item.title} 
                                price={item.price} 
                                imageUrl={item.imageUrl}
                                onPlus ={(obj) => onAddToCart(obj)}
                                onFavorite ={() => console.log('click on Favorite')}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
