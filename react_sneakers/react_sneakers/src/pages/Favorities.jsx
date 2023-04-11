import  React  from 'react';

import Card from "../components/Card";



const Favorities = ({ items, onAddToFavorite, onAddToCart }) => {

    return ( 
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>Мои закладки</h1>
        </div>

            <div className="d-flex flex-wrap">
                {items.map((item, index) => (
                            <Card
                                key={index} 
                                favorited={true}
                                onFavorite={onAddToFavorite}
                                onPlus={onAddToCart}
                                {...item}
                            />))
                }
            </div>
        </div>
    );
}
 
export default Favorities;