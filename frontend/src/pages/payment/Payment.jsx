import { useState } from "react";
import axios from "axios";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Send payment information to your backend for processing
      const response = await axios.post("/api/payment", paymentInfo);
      setLoading(false);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Make a Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {errorMessage && (
          <div className="text-red-600 mb-4">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-600 mb-4">{successMessage}</div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit Payment"}
        </button>
      </form>
    </div>
  );
}

export default Payment;
