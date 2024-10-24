import React, {useState} from 'react';

const Categories = React.memo(function Categories({items, funActive}) {
    const [categoryActive, setCategoryActive] = useState(0);
    const onSelectItem = (index) => {
        setCategoryActive(index);
        funActive(index);
    }
    return (
        <div className="categories">
            <ul>
                {items.map((nameCategories, index) => (
                    <li
                        className={categoryActive === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${nameCategories}_${index}`}
                    >{nameCategories}</li>
                ))}

            </ul>
        </div>
    );
})

export default Categories;