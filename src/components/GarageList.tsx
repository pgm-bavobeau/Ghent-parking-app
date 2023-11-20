import React, { useEffect } from 'react'

const GarageList = () => {
  const [data, setData] = React.useState<Garages>()
  const [isLoading, setLoading] = React.useState(true)
  
  useEffect(() => {
    fetch('https://gent.opendatasoft.com/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  )
}

export default GarageList