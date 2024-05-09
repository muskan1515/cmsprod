import axios from "axios";

async function handler(request, response) {
  try {
    
    const token = request.headers.authorization;
    const domain = process.env.BACKEND_DOMAIN;
    const payload = request.body;

    const userResponse = await axios.post(`${domain}/comments/addComment`, payload,{
        headers:{
            Authorization:token,
            "Content-Type":"application/json"
        }
    });
    const user = userResponse.data;

    if (!user) {
      return response.status(404).json({ error: "User Not Found" });
    }
    return response.status(200).json({ msg: "OK", userData: user });
  } catch (err) {
   console.log(err);
    if (err.response) {
      const axiosError = err.response.data;
      const statusCode = err.response.status;
      console.log(axiosError);
      console.error(statusCode, axiosError.message);

      return response.status(statusCode).json({ error: axiosError.message });
    } else {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default handler;
