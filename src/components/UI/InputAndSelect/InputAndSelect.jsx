import React, { useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';

const InputAndSelect = ({options, label, value, onChange, name}) => {
    const [selectValue, setSelectValue] = useState('')
    return (
        <div>
            <Select 
                name={name}
                label={label}
                value={selectValue}
                onChange={ref => {setSelectValue(ref); onChange(ref)}}
                options={options}
            />
            {selectValue === "Другое"
                ? <Input 
                    style={{width: '100%', margin: '5px 0'}}
                    type="text" 
                    value={value !== 'Другое' ? value : ''} 
                    onChange={e => onChange(e.target.value)}
                /> 
                : <div></div>
            }
            
        </div>
    );
};

export default InputAndSelect;