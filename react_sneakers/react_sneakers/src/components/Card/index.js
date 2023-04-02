
import styles from './card.module.scss';

function Card(props)  {
    const onClickButton = () => {
        console.log('click');
    }
    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img widrh={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">

                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} uah.</b>
                </div>
                <button className="button" onClick={() => onClickButton()}>
                    <img width={11} height={11}  src="/img/plus.svg" alt="plus" />
                </button>
            </div>
        </div>
    )
}

export default Card;