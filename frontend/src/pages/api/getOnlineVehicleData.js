import axios from "axios";
async function handler(request, response) {
  try {
    const token = request.headers.authorization;

    const domain = process.env.BACKEND_DOMAIN;

    const vehicle_data = await axios.get(`${domain}/vehicleDetails/getOnlineVehicleData`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const vehicle = vehicle_data.data;

    return response.status(200).json({ msg: "OK", data: vehicle });
  } catch (err) {
    console.log(err);
    if (err.response) {
      const axiosError = err.response.data;
      const statusCode = err.response.status;
      console.error(statusCode, axiosError.message); 
      return response.status(statusCode).json({ error: axiosError.message });
    } else {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default handler;
