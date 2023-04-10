import React from 'react';
import Input from './UI/Input/Input';

const ExtraFieldItem = ({extraField}) => {
    return (
        <div>
            <Input 
                name={extraField.name}
                type="text" 
                disabled
                placeholder="Введите текст" 
                value={extraField.value}
                style={{width: '100%', margin: '5px 0'}}
            />
        </div>
    );
};

export default ExtraFieldItem;