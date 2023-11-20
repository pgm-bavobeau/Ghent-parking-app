import React from 'react'

const GarageItem = (garage: Garage) => {
  return (
    <li className="bg-gray-100 p-4 rounded-md list-none">
      <h3 className="text-xl font-bold">{garage.name}</h3>
      <p>{garage.isopennow ? "Open" : "Closed"}</p>
      <p className="font-bold">{garage.availablecapacity} free spaces</p>
      <p>{JSON.parse(garage.locationanddimension).roadName}</p>
    </li>
  )
}

export default GarageItem