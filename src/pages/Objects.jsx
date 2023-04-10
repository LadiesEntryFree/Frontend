import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ObjectList from '../components/ObjectList';
import Modal from '../components/UI/Modal/Modal';
import Input from '../components/UI/Input/Input';
import ObjectService from '../services/ObjectService';
import '../styles/Object.css'
import Icon from 'react-icons-kit';
import {arrowRight} from 'react-icons-kit/icomoon/arrowRight';
import {arrowLeft} from 'react-icons-kit/icomoon/arrowLeft';
import {map} from 'react-icons-kit/icomoon/map'
import {folderDownload} from 'react-icons-kit/icomoon/folderDownload'
import {plus} from 'react-icons-kit/icomoon/plus'

const objects = [{
    id: 1,
    county: 'county 1',
    district: 'district 1',
    address: 'address 1',
    type: 'type 1',
    status: 'status 1',
    area: 'area 1',
    actual_user: 'actual_user 1',
    owner: 'owner 1'
},
{
    id: 2,
    county: 'county 2',
    district: 'district 2',
    address: 'address 2',
    type: 'type 2',
    status: 'status 2',
    area: 'area 2',
    actual_user: 'actual_user 2',
    owner: 'owner 2'
},
{
    id: 3,
    county: 'county 3',
    district: 'district 3',
    address: 'address 3',
    type: 'type 3',
    status: 'status 3',
    area: 'area 3',
    actual_user: 'actual_user 3',
    owner: 'owner 3'
},
{
    id: 4,
    county: 'county 4',
    district: 'district 4',
    address: 'address 4',
    type: 'type 4',
    status: 'status 4',
    area: 'area 4',
    actual_user: 'actual_user 4',
    owner: 'owner 4'
}]

const Objects = () => {
    const amount = 10
    const [page, setPage] = useState(0)
    const [active, setActive] = useState(false)
    const [county, setCounty] = useState('')
    const [district, setDistrict] = useState('')
    const [address, setAddress] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('')
    const [area, setArea] = useState('')
    const [actual_user, setActualUser] = useState('')
    const [owner, setOwner] = useState('')

    // const [objects, setObjects] = useState([])

    // const fetchObjects = () => {
    //     const objects = ObjectService.getObjects(amount, page)
    //     setObjects(objects)
    // }

    // useEffect(() => {
    //     fetchObjects()
    // }, [])

    const fetchObjectsByFilter = () => {
            const filter = {
                county: county === '' ? null : county,
                district: district === '' ? null : district,
                address: address === '' ? null : address,
                type: type === '' ? null : type,
                status: status === '' ? null : status,
                areaValue: area === '' ? null : area,
                actualUser: actual_user === '' ? null : actual_user,
                owner: owner === '' ? null : owner
            }
            const filtredObjects = ObjectService.getObjectsByFilter(filter)
            console.log(filter)
            setActive(false)
            setCounty('')
            setActualUser('')
            setAddress('')
            setArea('')
            setDistrict('')
            setOwner('')
            setStatus('')
            setType('')
            // setObjects(filtredObjects)
        }

    const incrementPage = () => {
        setPage(page + 1)
        // fetchObjects()
    }

    const decrementPage = () => {
        if (page >= 1) {
            setPage(page - 1)
            // fetchObjects()
        }
    }

    return (
        <div>
            <h1 style={{marginLeft: '5%', color: 'gray'}}>{'Объекты / Реестры'}</h1><br />
            <div style={{display: 'flex', marginLeft: '5%', width: '90%', justifyContent: 'space-between'}}>
                <div>
                    <input style={{padding: '4px 5px'}} type="search" placeholder='Поиск...'/>
                    <button className='filter-btn' onClick={() => setActive(true)}>Фильтры</button>
                    <Link to='/map'><button className='filter-btn'>Режим отображения: карта <Icon icon={map}/></button></Link>
                </div>
                
                <div style={{justifyContent: 'end'}}>
                    <button className='filter-btn'>Выгрузить отчет <Icon icon={folderDownload}/></button>
                    <Link to='/create-object'><button className='filter-btn'><Icon icon={plus}/> Создать объект</button></Link>
                    <button className='filter-btn'><Icon icon={plus}/> Создать событие</button>
                </div>
            </div>
            <div className='object-list-wrapper'>
                <ObjectList objects={objects}/>
            </div>
            <div className='pagination-btn-wrapper'>
                <div>
                    <Icon className='arrow-btn' icon={arrowLeft} onClick={() => {decrementPage()}}/>
                    <div style={{display: 'flex', margin: '0 8px'}}>{page + 1}</div>
                    <Icon className='arrow-btn' icon={arrowRight} onClick={() => {incrementPage()}}/>
                </div>
            </div>
            <Modal active={active} setActive={setActive}>
                <div className='filter-wrapper'>
                    <div className='filter-column-wrapper'>
                        <Input placeholder="Округ" value={county} onChange={e => setCounty(e.target.value)}/>
                        <Input placeholder="Район" value={district} onChange={e => setDistrict(e.target.value)}/>
                        <Input placeholder="Адрес" value={address} onChange={e => setAddress(e.target.value)}/>
                        <Input placeholder="Тип" value={type} onChange={e => setType(e.target.value)}/>
                    </div>
                    <div className='filter-column-wrapper'>
                        <Input placeholder="Состояние" value={status} onChange={e => setStatus(e.target.value)}/>
                        <Input placeholder="Площадь" value={area} onChange={e => setArea(e.target.value)}/>
                        <Input placeholder="Собственник" value={owner} onChange={e => setOwner(e.target.value)}/>
                        <Input placeholder="Фактический пользователь" value={actual_user} onChange={e => setActualUser(e.target.value)}/>
                    </div>
                </div>
                <button className='filter-btn' onClick={() => fetchObjectsByFilter()}>Применить</button>
            </Modal>
        </div>
    );
};

export default Objects;