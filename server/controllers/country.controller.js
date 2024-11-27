const axios = require("axios");

console.log("********************** Country Controller **********************");

const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get("https://date.nager.at/api/v3/AvailableCountries");

    // Ajustar el formato de respuesta al formato {"countryCode": "AD", "name": "Andorra"}
    const formattedCountries = response.data.map(country => ({
      countryCode: country.countryCode,
      name: country.name
    }));

    res.statusMessage = "Available countries fetched successfully";
    res.status(200).json(formattedCountries);
  } catch (error) {
    console.error("Error fetching available countries:", error.message);
    res.statusMessage = "Error fetching available countries";
    res.status(500).json({ error: error.message });
  }
};

const getCountryInfo = async (req, res) => {
  const { code } = req.params;
  console.log(code)
  try {
    const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
    const countryInfo = countryInfoResponse.data;

    const populationResponse = await axios.get("https://countriesnow.space/api/v0.1/countries/population");
    const populationData = populationResponse.data.data;

    const countryPopulation = populationData.find(
      (entry) => entry.country === countryInfo.commonName
    );

    const populationCounts = countryPopulation
      ? countryPopulation.populationCounts.map((record) => ({
        year: record.year,
        population: record.value,
      }))
      : [];

    const flagsResponse = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    const flagData = flagsResponse.data.data;

    const countryFlag = flagData.find(
      (entry) => entry.name === countryInfo.commonName || entry.iso2 === countryInfo.countryCode
    );

    const flagUrl = countryFlag ? countryFlag.flag : null;

    const formattedBorders = (countryInfo.borders || []).map(border => ({
      countryCode: border.countryCode,
      name: border.commonName,
    }));

    const responseData = {
      countryCode: countryInfo.countryCode,
      name: countryInfo.commonName,
      officialName: countryInfo.officialName,
      region: countryInfo.region,
      borders: formattedBorders,
      population: populationCounts,
      flag: flagUrl,
    };

    res.statusMessage = "Country information fetched successfully";
    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    res.statusMessage = "Error fetching country information";
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};

console.log("---------------------- Country Controller ----------------------");