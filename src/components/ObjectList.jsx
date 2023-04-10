import React from 'react';
import ObjectItem from './ObjectItem';

const ObjectList = ({objects}) => {
    const columns = {
        county: 'Округ',
        district: 'Район',
        address: 'Адрес',
        type: 'Тип',
        status: 'Состояние',
        area: 'Площадь',
        actual_user: 'Собственник',
        owner: 'Фактический пользователь'
    }
    return (
        <div className='object-list'>
            <ObjectItem object={columns} number='№'/>
            {objects.map((object, index) => 
                <ObjectItem object={object} number={index + 1} key={object.id}/>
            )}
        </div>
    );
};

export default ObjectList;