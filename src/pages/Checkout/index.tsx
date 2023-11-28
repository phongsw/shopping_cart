// CheckoutPage.tsx

import React, { useState } from 'react';

const CheckoutPage: React.FC = () => {
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    address: '',
    phone: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setShippingAddress((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePaymentInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to the server for payment processing
    console.log('Shipping Address:', shippingAddress);
    console.log('Payment Info:', paymentInfo);
    // Add additional logic for payment processing
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Shipping Address Section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border p-2"
                value={shippingAddress.fullName}
                onChange={(e) => handleShippingAddressChange(e, 'fullName')}
                required
                placeholder='Full Name'
              />
            </div>
            {/* Add other shipping address fields (Address, City, Zip Code, Country) */}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                className="w-full border p-2 mb-4"
                value={shippingAddress.address}
                onChange={(e) => handleShippingAddressChange(e, 'address')}
                required
                placeholder='Address'
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="text"
                className="w-full border p-2"
                value={shippingAddress.phone}
                onChange={(e) => handleShippingAddressChange(e, 'phone')}
                required
                placeholder='Phone Number'
              />
            </div>
            {/* Add other shipping address fields (Address, City, Zip Code, Country) */}
          </div>
        </div>

        {/* Payment Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                className="w-full border p-2"
                value={paymentInfo.cardNumber}
                onChange={(e) => handlePaymentInfoChange(e, 'cardNumber')}
                required
                placeholder='Card Number'
              />
            </div>
            {/* Add other payment information fields (Expiration Date, CVV) */}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-6 hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
