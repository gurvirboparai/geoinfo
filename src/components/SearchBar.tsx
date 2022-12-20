import React, { useEffect, useRef, useState } from "react";
import useGetCountry from "../hooks/useGetCountry";

export default function SearchBar() {
    const search = useRef<null | HTMLInputElement>(null);
    const [countryName, setCountryName] = useState("");
    const { country } = useGetCountry(countryName);

    return (
        <div>
            <div className=" bg-white w-[584px] min-h-[184px] rounded-3xl flex justify-center items-center shadow-sp flex-col">
                <div className="space-x-[3rem] p-3">
                    <input
                        type="text"
                        placeholder="Enter a country name"
                        className="border-b border-black focus:outline-none w-[18rem] font-light"
                        ref={search}
                    />
                    <button
                        className="w-[124px] h-[49px] rounded-3xl bg-[#A7C7E7] hover:bg-[#4e9ceb] duration-300 ease-in-out "
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>
                <div className="flex flex-col mt-5">
                    {country ? <div className="w-[584px] p-4">
                        <div className="flex flex-col items-center">
                            <img src={country?.flags?.svg} alt="" className="w-[350px] outline outline-1 " />
                            <h1 className="uppercase font-bold text-[24px] my-5">{country.name.official}</h1>
                        </div>
                        <p> <b>Common Name: </b> {country.name.common} </p>
                        <p> <b>Capital: </b> {country.capital} </p>
                        <p> <b>Continent: </b> {country.continents} </p>
                        <p> <b>Population: </b> {country.population} </p>

                    </div> : ""}
                </div>
            </div>
        </div>
    );

    function handleSearch() {
        if (search && search.current) setCountryName(search.current?.value);
    }
}
