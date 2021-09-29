import React, { useContext } from 'react';
import { CategoryContext } from "./../../App";

const CategoryDetail = (props) => {
    const {name } = props.product

    const category = useContext(CategoryContext)

     
    return (
        <div>
            <h4>This is your category Detail has : {category}</h4>
            <h6>Selected product : {name}</h6>
        </div>
    );
};

export default CategoryDetail;