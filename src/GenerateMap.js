// Received significant and crucial assistance from Esin Saribudak and Zoe Peterson, co-instructors of Spring 2022 GA cohort. Google documentation was key to successfully achieving this mapping functionality.

// NOTE: was required to download additional Google library (react-google-maps/api).

import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,       // use of this method required by Google
  DirectionsService,        // use of this method required by Google
} from '@react-google-maps/api'

import { Wrapper } from '@googlemaps/react-wrapper'
import React, { useEffect, useState } from 'react'
const google = window.google
const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}


export default function GenerateMap() {
  const [map, setMap] = React.useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBiFnOrtD1ruSpWDH2jPvT8dqp1C5SAgJ0',
  })
  const originAddress = '1 South Van Ness Ave, San Francisco, CA'

  const destinationAddress = '757 Sutter St, San Francisco, CA'
  const request = {
    origin: originAddress,
    destination: destinationAddress,
    travelMode: 'WALKING',
  }

  const apikey = `AIzaSyBiFnOrtD1ruSpWDH2jPvT8dqp1C5SAgJ0`
  const DirectionsService = new google.maps.DirectionsService()
  const DirectionsRenderer = new google.maps.DirectionsRenderer()
  DirectionsRenderer.setMap(map)
  DirectionsService.route(request, (result, status) => {
    if (status === 'OK') {
      console.log(result)
      DirectionsRenderer.setDirections(result)
    }
  })

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <div>
      {' '}
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */} <> </>{' '}
        </GoogleMap>
      ) : (
        <> </>
      )}{' '}
    </div>
  )
}
