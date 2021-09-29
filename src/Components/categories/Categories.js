import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProduct = [{ name: 'Lenovo', category: 'laptop' }, { name: 'Dell', category: 'laptop' }, { name: 'HP', category: 'laptop' },
{ name: 'Samsung', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'iPhone', category: 'mobile' },
{ name: 'Nikon', category: 'camera' }, { name: 'Canon', category: 'camera' }, { name: 'Olympus', category: 'camera' }]

const Categories = () => {

    const [category ]= useContext(CategoryContext);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const matchedProducts = allProduct.filter(pd => pd.category.toLowerCase() ===  category.toLowerCase())
        setProduct(matchedProducts)
    }, [category])

    return (
        <div>
            <h4>Select your category</h4>
            {
                product.map(pd => <CategoryDetail product={pd} key={pd.name} ></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;