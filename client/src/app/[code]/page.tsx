import React from "react";
import axios from "axios";
import Redirect from "@/components/Redirect";
import PopulationChart from "@/components/PopulationChart";

const Page = async ({ params }: { params: any }) => {
  const { code } = await params;

  const { data: countryData } = await axios.get(
    `http://localhost:8080/api/country/country/${code}`
  );

  return (
    <div className="container p-6 bg-white">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">
        {countryData.name}
      </h1>
      <div>
        <p className="text-lg font-semibold text-gray-900">Flag:</p>
        <img
          src={countryData.flag}
          alt={`${countryData.name} Flag`}
          className="w-32 h-20 object-contain"
        />
      </div>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Country Code:</strong>{" "}
          {countryData.countryCode}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">
            Official Name:
          </strong>{" "}
          {countryData.officialName}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Region:</strong>{" "}
          {countryData.region}
        </p>
        <div>
          <p className="text-lg font-semibold text-gray-900">Borders:</p>
          <div className="hidden md:block">
            <table className="min-w-full border-collapse border border-gray-200 mt-4">
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
                {countryData.borders.map((border: any, index: any) => (
                  <tr key={index} className={`odd:bg-white even:bg-gray-50`}>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {border.name}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {border.countryCode}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      <Redirect countryCode={border.countryCode} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4 mt-4">
            {countryData.borders.map((border: any, index: any) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <h2 className="text-xl font-semibold mb-2">{border.name}</h2>
                <p className="text-gray-700">
                  Country Code: {border.countryCode}
                </p>
                <div className="mt-4">
                  <Redirect countryCode={border.countryCode} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PopulationChart population={countryData.population} />
      </div>
    </div>
  );
};

export default Page;
