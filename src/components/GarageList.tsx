import React, { useEffect } from "react";
import GarageItem from "./GarageItem";

const GarageList = () => {
  const [data, setData] = React.useState<Garages>();
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(
      "https://gent.opendatasoft.com/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Garage List</h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <GarageItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GarageList;
