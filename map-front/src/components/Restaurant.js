import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";
import React, { useEffect, useState } from "react";

export default function Restaurants({ curLocation, activeFuncName, data }) {
  // const [loading, setLoading] = useState(false);

  const purpleOptions = { color: "purple" };
  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  useEffect(() => {
    console.log(activeFuncName);
    console.log(data);
  }, []);

  const changePosition = (arr) => {
    arr.map((item) => {
      const elem = item.splice(0, 1)[0];
      item.splice(1, 0, elem);
    });
  };

  if (!curLocation) return null;

  return (
    <MapContainer
      center={[40.82302903, -73.93414657]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker
        position={[curLocation?.lat, curLocation?.long]}
        eventHandlers={{
          click: () => {
            console.log("marker clicked");
          },
        }}
      > */}
      {/* <Popup>Sukhbaatar Square</Popup> */}
      {/* </Marker> */}
      {data && (
        <>
          {activeFuncName == "1" ? (
            <>
              {data.length > 0 &&
                data?.map((item, index) => {
                  return (
                    <Marker
                      position={[
                        item?.location?.coordinates[1],
                        item?.location?.coordinates[0],
                      ]}
                      eventHandlers={{
                        click: () => {
                          console.log("marker clicked");
                        },
                      }}
                    >
                      <Popup>{item.name}</Popup>
                    </Marker>
                  );
                })}
            </>
          ) : activeFuncName == "2" ? (
            <>
              {data.length > 0 &&
                data?.map((item, index) => {
                  console.log("polugons");
                  {
                    changePosition(item?.geometry?.coordinates[0]);
                  }
                  return (
                    <>
                      <Polygon
                        pathOptions={purpleOptions}
                        positions={[
                          item && item.geometry && item.geometry.coordinates[0],
                        ]}
                      />
                    </>
                  );
                })}
              {/* <Polygon pathOptions={purpleOptions} positions={polygon} /> */}
            </>
          ) : (
            <>
              {console.log("polygons2")}
              {data.length > 0 &&
                data?.map((item, index) => {
                  return (
                    <Marker
                      position={[
                        item?.location?.coordinates[1],
                        item?.location?.coordinates[0],
                      ]}
                      eventHandlers={{
                        click: () => {
                          console.log("marker clicked");
                        },
                      }}
                    >
                      <Popup>{item.name}</Popup>
                    </Marker>
                  );
                })}
            </>
          )}
        </>
      )}
    </MapContainer>
  );
}
