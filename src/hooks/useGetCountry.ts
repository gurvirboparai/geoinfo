import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

type country = {
  name: {
    common: string;
    official: string;
  };
  capital: [string];
  population: number;
  continents: [string];
  flags: {
    png: string;
    svg: string;
  };
};

export default function useGetCountry(search: string | null) {
  const [country, setCountry] = useState<null | country>(null);
  // const debounceSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios(
        `https://restcountries.com/v3.1/name/${search}`,
        { method: "GET" }
      );
      const data = resp.data;
      setCountry(data[0]);
    }
    if (search) fetchData();
  }, [search]);
  return { country };
}
