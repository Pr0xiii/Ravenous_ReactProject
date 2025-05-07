import React from 'react';
import { businesses } from '../BusinessObjects';
import Business from '../Business/Business';

function BusinessList() {
    return (
        <div className="list-container">
            {businesses.map(element => <Business bussinesObject={element}/>)}
        </div>
    );
}

export default BusinessList;