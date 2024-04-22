import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getAllAccounts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/accounts`);
    return response.data;
  } catch (error) {
    console.error("An error backend:", error);
  }
};

const sendFormDataToBackend = async (formData) => {
  const dataToSend = [];
  dataToSend.push(formData);
  try {
    const response = await axios.post(`${BASE_URL}/accounts`, dataToSend);
  } catch (error) {
    console.log(error);
  }
};

const getLoanInfo = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/balance/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { 
  getAllAccounts,
  sendFormDataToBackend,
  getLoanInfo,
};
