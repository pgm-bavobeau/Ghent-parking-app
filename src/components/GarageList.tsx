import { useEffect, useMemo, useState } from "react";
import GarageItem from "./GarageItem";

const GarageList = () => {
  const [data, setData] = useState<Garages>();
  const [isLoading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "availableCapacity">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

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

  const handleSortByChange = (value: "name" | "availableCapacity") => {
    setSortBy(value);
  };

  const sortedData = useMemo(() => {
    if (data) {
      let sortedArray = [...data];
      if (sortBy === "name") {
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "availableCapacity") {
        sortedArray.sort((a, b) => a.availablecapacity - b.availablecapacity);
      }
      if (sortDirection === "desc") {
        sortedArray.reverse();
      }
      return sortedArray;
    }
    return data;
  }, [data, sortBy, sortDirection]);

  if (isLoading) return <p>Loading...</p>;
  if (!sortedData) return <p>No data found</p>;
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Garage List</h2>
      <div className="flex justify-center items-center">
        <label htmlFor="sortBy" className="mr-2">
          Sort By:
        </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => handleSortByChange(e.target.value as "name" | "availableCapacity")}
        >
          <option value="name">Name</option>
          <option value="availableCapacity">Available Capacity</option>
        </select>
        <button
          onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
        >
          {sortDirection === "asc" ? "ascending" : "descending"}
        </button>
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {sortedData.map((item) => (
          <GarageItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default GarageList;
