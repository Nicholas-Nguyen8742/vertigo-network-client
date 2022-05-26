import './MissionsMap.scss';
import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DarkMapBtn from '../DarkMapBtn/DarkMapBtn';
// Dark Mode
// URL https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
// Attributions 	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'


const MissionsMap = ({ missions }) => {
    console.log(missions);
    const state = { center: { lat: 28.5384, lng: -81.3789 } };
    const [colorMode, setColorMode] = useState("light");

    const light = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const dark = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";

    const onClick = () => { setColorMode((colorMode) => (colorMode === "light" ? "dark" : "light")); };

    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.setUrl(colorMode === "light" ? light : dark);
        }
    }, [colorMode]);

    return (
        <section className='missionsMap'>
            <DarkMapBtn onClick={onClick} />
            <MapContainer
                center={state.center}
                zoom={11}
                scrollWheelZoom={true}>
                <TileLayer
                    ref={ref}
                    attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                    url={colorMode === "light" ? light : dark}
                />
                {missions.map(mission => (
                    <Marker
                        key={mission.timestamp}
                        position={[mission.latitude, mission.longitude]}>
                        <Popup position={[mission.longitude, mission.latitude]}>
                            <div className="Popup">
                                <h2 className="Popup__subheader">{mission.firstName + ' ' + mission.lastName}</h2>
                                <p className="Popup__title">{mission.specialty}</p>
                                <p className="Popup__body">{mission.email}</p>
                                <p className="Popup__body">{mission.city + ", " + mission.state}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    );
}

export default MissionsMap;
