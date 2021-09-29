import React, { useContext } from 'react';
import { CategoryContext } from "./../../App";

const CategoryDetail = () => {

    const category = useContext(CategoryContext)

     
    return (
        <div>
            <h4>This is your category Detail has : {category}</h4>
            <h6>Selected product : {category}</h6>
        </div>
    );
};

export default CategoryDetail;