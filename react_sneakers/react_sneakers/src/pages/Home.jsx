import Card from '../components/Card';

const Home = ({ items, searchValue, setSearchValue, onCahangeSearchInput, onAddToCart, onAddToFavorites}) => {
    return ( 
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
            <div className="search-block d-flex">
                <img src="/img/search.svg" alt="Search" />
                    {searchValue && <img
                    onClick={() => setSearchValue('')}
                    className="cu-p clear"
                    src="/img/btn-remove.svg" 
                    alt="Remove" />}
                <input
                    onChange={onCahangeSearchInput}
                    value={searchValue} 
                    placeholder="Поиск..." />
            </div>
        </div>

            <div className="d-flex flex-wrap">
                {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                        <Card
                            key={index} 
                            onPlus ={(obj) => onAddToCart(obj)}
                            onFavorite ={(obj) => onAddToFavorites(obj)}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}
 
export default Home;