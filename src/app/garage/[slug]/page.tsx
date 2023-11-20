"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const GaragePageByName = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Garage[]>([]);
  const [isLoading, setLoading] = useState(true);

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

  const { slug } = params;
  const name = decodeURI(slug);
  const garage = data.find((garage) => garage.name === name);

  if (isLoading) return <p>Loading...</p>;
  if (!data || !garage) return <p>No data found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Garage Page: {name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold">Description:</h2>
          <p>{garage.description}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Opening Times:</h2>
          <p>{garage.openingtimesdescription}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">URL Link:</h2>
          <Link href={garage.urllinkaddress}>{garage.urllinkaddress}</Link>
        </div>
        <div>
          <h2 className="text-lg font-bold">Operator Information:</h2>
          <p>{garage.operatorinformation}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Category:</h2>
          <p>{garage.categorie}</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Type:</h2>
          <p>{garage.type}</p>
        </div>
      </div>
    </div>
  );
};

export default GaragePageByName;