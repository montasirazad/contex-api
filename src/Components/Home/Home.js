import React from 'react';
import Categories from '../categories/Categories';
 
const Home = (props) => {
    const {count} = props
    return (
        <div style={{border:"2px solid purple",margin:'10px', padding:'10px' }}>
            <h1>This is Home : {count}</h1>
            <Categories count={count}></Categories>
         </div>
    );
};

export default Home;