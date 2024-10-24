import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../componets";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters.js";


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

    const onSelectCategory = React.useCallback(
        (index) => {
            dispatch(setCategory(index));
        }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    funActive={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))}
            </div>
        </div>
    );
}

export default Home;