import React from 'react';
import ExtraFieldItem from './ExtraFieldItem';

const ExtraFieldList = ({extraFields}) => {
    return (
        <div>
            <h2>Дополнительные поля</h2>
            {extraFields.map((extraField, index) => 
                <ExtraFieldItem key={index} extraField={extraField}/>    
            )}
        </div>
    );
};

export default ExtraFieldList;