import axios from "axios";

const searchAPI = axios.create({
	baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
	params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
		limit: 5,
		access_token: "UNDEFINED",
	},
});

export default searchAPI;