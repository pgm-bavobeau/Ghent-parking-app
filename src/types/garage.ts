type Garage = {
  name: string;
  lastupdate: string;
  totalcapacity: number;
  availablecapacity: number;
  occupation: number;
  type: string;
  description: string;
  id: string;
  openingtimesdescription: string;
  isopennow: number;
  temporaryclosed: number;
  operatorinformation: string;
  freeparking: number;
  urllinkaddress: string;
  occupancytrend: string;
  locationanddimension: string;
  location: {
    lon: number;
    lat: number;
  };
  text: null;
  categorie: string;
};

type Garages = Garage[];