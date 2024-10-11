import React, {useState} from 'react';

function Categories({items, funActive}) {
    const [categoryActive, setCategoryActive] = useState(0);
    return (
        <div className="categories">
            <ul>
                {items.map((nameCategories, index) => (
                    <li
                        className={categoryActive === index ? 'active' : ''}
                        onClick={()=>setCategoryActive(index)}
                        key={`${nameCategories}_${index}`}
                    >{nameCategories}</li>
                ))}

            </ul>
        </div>
    );
}

export default Categories;