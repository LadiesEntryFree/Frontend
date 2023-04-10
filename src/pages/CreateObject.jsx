import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import Select from '../components/UI/Select/Select';
import InputAndSelect from '../components/UI/InputAndSelect/InputAndSelect';
import Input from '../components/UI/Input/Input';
import classes from '../styles/CreateObject.module.css';
import Icon from 'react-icons-kit';
import {plus} from 'react-icons-kit/icomoon/plus'
import ObjectService from '../services/ObjectService';
import ExtraFieldList from '../components/ExtraFieldList';
import Modal from '../components/UI/Modal/Modal';
import { Link } from 'react-router-dom';
import '../styles/Object.css'

const counties = ['Центральный',
                'Северо-Западный',
                'Южный',
                'Северо-Кавказский',
                'Приволжский',
                'Уральский',
                'Сибирский',
                'Дальневосточный']
const districts = ['Гиагинский',
                'Кошехабльский',
                'Красногвардейский',
                'Майкопский',
                'Тахтамукайский',
                'Теучежский',
                'Шовгеновский']
const types = ['Тип 1', 'Тип 2', 'Тип 3', 'Тип 4', 'Другое']
const statuses = ['Плохое', 'Норм', 'Ужас', 'Другое']

const CreateObject = () => {
    const [active, setActive] = useState(false)
    const [county, setCounty] = useState('')
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [area, setArea] = useState('')
    const [actual_user, setActualUser] = useState('')
    const [owner, setOwner] = useState('')
    const [fieldName, setFieldName] = useState('')
    const [fieldValue, setFieldValue] = useState('')
    const [extraFields, setExtraFields] = useState([])
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const addExtraField = () => {
        if (fieldName !== '' & fieldValue !== '') {
            let newList = [...extraFields]
            newList.push({
                name: fieldName,
                value: fieldValue
            })
            setExtraFields(newList)
        }
        setFieldName('')
        setFieldValue('')
        setActive(false)
    }

    const createObject = () => {
        let attach = []
        attach = acceptedFiles.map(file => {
            const response = ObjectService.uploadFiles(file)
            return response.data
        })

        if (attach.length === 0) attach = null

        let newList = extraFields.map(field => ({...field, type: null, possibleValues: null}))

        const createdObject = {
            county: county,
            district: district,
            address: address,
            type: type,
            status: status,
            area: area,
            actualUser: actual_user,
            owner: owner,
            attachments: JSON.parse(JSON.stringify(attach)),
            customFields: JSON.parse(JSON.stringify(newList))
        }
        ObjectService.createObject(createdObject)
    }
  
    return (
        <div style={{marginLeft: '4vw'}}>
            <h1 style={{color: 'gray'}}>Добавление объекта</h1>
            <div className={classes.wrapper}>
                <div className={classes.wrapperHalf}>
                    <h2>Данные</h2>
                    <div style={{display: 'flex'}}>
                        <Select 
                            name='Округ'
                            label='Выберете округ'
                            options={counties}
                            value={county}
                            onChange={ref => setCounty(ref)}
                        />
                        <Select 
                            name='Район'
                            label='Выберете район'
                            options={districts}
                            value={district}
                            onChange={ref => setDistrict(ref)}
                        />
                        <div style={{flex: '3'}}>
                            <Input 
                                style={{width: '100%', margin: '5px 0'}}
                                name='Адрес'
                                type="text" 
                                placeholder="Введите адрес" 
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                    </div>
                    <InputAndSelect 
                        name={'Тип'}
                        label='Выберете тип'
                        options={types}
                        value={type}
                        onChange={setType}
                        style={{marginBottom: '20px'}}
                    />
                    <InputAndSelect 
                        name={'Состояние'}
                        label='Выберете состояние'
                        options={statuses}
                        value={status}
                        onChange={setStatus}
                    />
                    <Input 
                        name='Площадь (кв.м)'
                        type="text" 
                        placeholder="Введите площадь" 
                        onChange={e => setArea(e.target.value)}
                        value={area}
                        style={{width: '100%', margin: '5px 0'}}
                    />
                    <div style={{display: 'flex'}}>
                        <div style={{flex: '1', marginRight: '10px'}}>
                            <Input 
                                name='Собственник'
                                type="text" 
                                placeholder="Введите ФИО" 
                                onChange={e => setOwner(e.target.value)}
                                value={owner}
                                style={{width: '100%', margin: '5px 0'}}
                            />
                        </div>
                        <div style={{flex: '1'}}>
                            <Input 
                                name='Фактический пользователь'
                                type="text" 
                                placeholder="Введите ФИО" 
                                onChange={e => setActualUser(e.target.value)}
                                value={actual_user}
                                style={{width: '100%', margin: '5px 0'}}
                            />
                        </div>
                    </div>
                    {extraFields.length !== 0
                        ? <ExtraFieldList extraFields={extraFields}/>
                        : <div></div>
                    }
                    <div className={classes.addMoreFieldsBtn} onClick={() => setActive(true)}>
                        <Icon icon={plus}/><button className={classes.innerBtn}>Добавить дополнительное поле</button>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className={classes.addMoreFieldsBtn} onClick={() => createObject()}>
                            <Link to='/objects'><Icon icon={plus}/><button className={classes.innerBtn}>Добавить в реестр</button></Link>
                        </div>
                        <div className={classes.addMoreFieldsBtn}>
                            <Icon icon={plus}/><button className={classes.innerBtn}>Создать событие</button>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapperHalf} style={{marginLeft: '20px'}}>
                    <h2>{'Фото / Видео'}</h2>
                    <div {...getRootProps({className: 'dropzone'})} className={classes.dragNDrop}>
                        <input {...getInputProps()} />
                        <span>Перетащите файл(-ы) или загрузите с компьютера</span>
                    </div>
                </div>
            </div>
            <Modal active={active} setActive={setActive}>
                <Input 
                    name='Название поля'
                    type="text" 
                    placeholder="Введите название поля" 
                    value={fieldName}
                    onChange={e => setFieldName(e.target.value)}
                    style={{width: '100%', margin: '5px 0'}}
                />
                <Input 
                    name='Содержание поля'
                    type="text" 
                    placeholder="Введите содержание поля" 
                    value={fieldValue}
                    onChange={e => setFieldValue(e.target.value)}
                    style={{width: '100%', margin: '5px 0'}}
                />
                <button className='filter-btn' style={{marginLeft: '0'}} onClick={() => addExtraField()}>Добавить</button>
            </Modal>
        </div>
    );
};

export default CreateObject;