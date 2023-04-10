import React from 'react';

const Select = ({options, label, value, onChange, name}) => {
    return (
        <div>
            <div style={{fontWeight: 'bolder'}}>{name}</div>
            <select 
                onChange={e => onChange(e.target.value)}
                value={value}
                style={{marginRight: '10px'}}
            >
                <option disabled value="">{label}</option>
                {options.map((option, index) => 
                    <option key={index} value={option}>{option}</option>
                )}
            </select>
        </div>
        
    );
};

export default Select;