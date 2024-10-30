import React from 'react';

import {Categories, ContentLoading, PizzaBlock, SortPopup} from "../componets";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters.js";
import {fetchPizzas} from "../redux/actions/pizzas.js";


const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'abc'}
];

function Home() {
    // отправляет действия (actions) в redux хранилище
    const dispatch = useDispatch(); // хук позволяет компонентам взаимодейсвовать напрямую с храниищем
    // извлекает объект/массив данных из хранилища redux и хранит в переменной
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    //запрос на сервер
    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, [category, sortBy])

    const onSelectCategory = React.useCallback(
        (index) => {
                dispatch(setCategory(index));
        }, [])

    const onSelectSortBy = React.useCallback(
        (type) => {
                dispatch(setSortBy(type));
        }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    funOnActive={onSelectCategory}
                    items={categoryNames}
                 />
                <SortPopup
                    activeSortType={sortBy}
                    items={sortItems}
                    onClickSortBy={onSelectSortBy}
                 />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoaded
                    ? items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
                    : Array(9).fill(0).map((_, id) => (<ContentLoading key={id}/>))
                }
            </div>
        </div>
    );
}

export default Home;