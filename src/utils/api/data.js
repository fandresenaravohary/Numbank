import axios from "axios";

const getAllAccounts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/accounts");
    return response.data;
  } catch (error) {
    console.error("An error backend:", error);
  }
};

const sendFormDataToBackend = async (formData) => {
  const dataToSend = [];
  dataToSend.push(formData);
  try {
    const response = await axios.post(
      "http://localhost:8080/accounts",
      dataToSend
    );
  } catch (error) {
    console.log(error);
  }
};

export { 
  getAllAccounts,
  sendFormDataToBackend,  
};
