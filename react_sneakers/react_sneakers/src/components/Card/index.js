import React from 'react';

import styles from './card.module.scss';

function Card( { id, title, imageUrl, price, onPlus, onFavorite, favorited = false, items })  {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus( {id, title, imageUrl, price} )
        setIsAdded(!isAdded)
    };

    const onClickFavorite = () => {
            onFavorite( {id, title, imageUrl, price} )
            setIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}
                onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Unliked" />
            </div>
            <img widrh={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">

                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} uah.</b>
                </div>
                    <img className={styles.plus}
                    onClick={onClickPlus} 
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" />
                </div>
        </div>
    )
}

export default Card;
