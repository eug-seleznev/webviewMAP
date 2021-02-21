import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({match}) => {
    let city = match.params.city
    const [isCity, setCity] = useState(null)
    const [location, setLocation] = useState({
        lat: 0,
        lon: 0
    })
    const [load, setLoad] = useState(false)
    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`)
        .then(res =>  res.json())
        .then(data => setCity(data))
    }, [])


    useEffect(() => {
        console.log(isCity)
        if(isCity && isCity.length>1){
            try {
              let new_city = isCity.filter((city) => city.type == "city")[0];
              console.log(new_city.lat);
              setLocation({
                lat: parseFloat(new_city.lat),
                lon: parseFloat(new_city.lon),
              });
              setLoad(true);

              //    console.log(location);
            } catch (err) {
                setLocation({
                    lat: parseFloat(isCity[0].lat),
                    lon: parseFloat(isCity[0].lon)
                })

                setLoad(true)



            }
           

        }
        if(isCity && isCity.length ==1) {
            setLocation({
              lat: parseFloat(isCity[0].lat),
              lon: parseFloat(isCity[0].lon),
            });

            setLoad(true);
        }

        if(isCity && isCity.length==0){

            setLocation({
              lat: 55.7504461,
              lon: 37.6174943
            });

            setLoad(true);
            
            
        }
    }, [isCity])

    useEffect(() => {
        if(load){
            console.log(location)
        }
    }, [load])

    return (
      <div
        id="mapid"
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
        }}
      >
        {!load ? (
          <p>loading...</p>
        ) : (
          <MapContainer
            style={{ position: "absolute", height: "100%", width: "100%" }}
            center={[location.lat, location.lon]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='tennis'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lon]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    );
}



export default Map