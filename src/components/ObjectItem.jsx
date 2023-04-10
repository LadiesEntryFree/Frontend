import React from 'react';

const ObjectItem = ({number, object}) => {
    return (
        <div className='object-item'>
            <div>{number}</div>
            <div>{object.county}</div>
            <div>{object.district}</div>
            <div>{object.address}</div>
            <div>{object.type}</div>
            <div>{object.status}</div>
            <div>{object.area}</div>
            <div>{object.actual_user}</div>
            <div>{object.owner}</div>
        </div>
    );
};

export default ObjectItem;