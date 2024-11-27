import React from "react";
import axios from "axios";
import Redirect from "@/components/Redirect";

const Home = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/country/countries"
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">List of Countries</h1>

      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Country Name
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Country Code
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {response.data.map((country: any) => (
              <tr
                key={country.countryCode}
                className="odd:bg-white even:bg-gray-50"
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {country.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {country.countryCode}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <Redirect countryCode={country.countryCode} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4">
        {response.data.map((country: any) => (
          <div
            key={country.countryCode}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{country.name}</h2>
            <p className="text-gray-700">Country Code: {country.countryCode}</p>
            <div className="mt-4">
              <Redirect countryCode={country.countryCode} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
