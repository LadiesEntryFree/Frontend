import React, { useEffect } from 'react';
import DG from '2gis-maps';
import '../styles/Map.css'
import { Link } from 'react-router-dom';

const MapWrapper = () => {
    useEffect(() => {
        let map = DG.map('map-container', {
            center: [55.75, 37.61],
            zoom: 10
        })
        DG.marker([55.7, 37.3]).addTo(map)
        DG.marker([55.69, 37.28]).addTo(map)
        DG.marker([55.65, 37.31]).addTo(map)
        DG.marker([55.71, 37.32]).addTo(map)
    }, [])
    return (
        <div id='map-container' className='map'>
        </div>
    )
}

const Map = () => {
    

    return (
        <div>
            <div className='map-wrapper'></div>
            <div style={{display: 'inline'}}>
                <div className='map-wrapper' style={{display: 'inline'}}></div><MapWrapper />
            </div>
            <Link to='/objects' style={{position: 'relative', left: '71vw'}}><button className='map-btn'>Назад</button></Link>
        </div>  
    );
};

export default Map;