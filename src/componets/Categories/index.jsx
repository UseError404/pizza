import React, {useState} from 'react';

const Categories = React.memo(function Categories({ activeCategory , items, funOnActive}) {

    return (
        <div className="categories">
            <ul>
                {items.map((nameCategories, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => funOnActive(index)}
                        key={`${nameCategories}_${index}`}
                    >{nameCategories}</li>
                ))}

            </ul>
        </div>
    );
})

export default Categories;