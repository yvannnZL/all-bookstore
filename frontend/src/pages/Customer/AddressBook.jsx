// AddressBook.js
import React, { useContext, useState, useEffect } from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import AuthContext from "../../context/AuthContext";
import { SecondaryButton } from "../../components/Buttons/SecondaryButton";

const AddressBook = () => {
  const { authTokens } = useContext(AuthContext);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [addressFormData, setAddressFormData] = useState({
    customer: "",
    street: "",
    barangay: "",
    city: "",
    region: "",
    zip_code: "",
    default_address: true,
  });
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);

  const handleChange = (e) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("street", addressFormData.first_name);
    formData.append("barangay", addressFormData.last_name);
    formData.append("city", addressFormData.email);
    formData.append("region", addressFormData.username);
    formData.append("zip_code", addressFormData.password);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/customer/address/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + authTokens.access,
          },
          body: JSON.stringify(addressFormData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Received data:", data);
        setAddressFormData({
          customer: data.id,
          street: "",
          barangay: "",
          city: "",
          region: "",
          zip_code: "",
        });
        setShowAddAddressForm(false);
      } else {
        console.error("Failed to add address:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/customer/detail/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(authTokens.access),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCustomer(data);
          setAddressFormData({
            customer: data.id,
            street: "",
            barangay: "",
            city: "",
            region: "",
            zip_code: "",
          });
        } else {
          console.error(
            "Failed to fetch customer address data:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching customer address data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (authTokens) {
      fetchCustomerData();
    }
  }, [authTokens]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navigation />
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-1 ">
          <Sidebar className="lg:col-span-1" />
          <div className="lg:col-span-3 mt-5">
            <div className="p-6 flex justify-between">
              <div className="text-lg font-montserrat text-green-50 mb-6">
                Address Book
              </div>

              <button
                className="mb-6"
                onClick={() => {
                  setShowAddAddressForm(true);
                  console.log("Add address form should show up");
                }}
              >
                + Add New Address
              </button>

              {showAddAddressForm && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street
                    </label>
                    <input
                      type="text"
                      name="street"
                      id="street"
                      value={addressFormData.street}
                      onChange={handleChange}
                      placeholder="Street"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="barangay"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Barangay
                    </label>
                    <input
                      type="text"
                      name="barangay"
                      id="barangay"
                      value={addressFormData.barangay}
                      onChange={handleChange}
                      placeholder="Barangay"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={addressFormData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Region
                    </label>
                    <input
                      type="text"
                      name="region"
                      id="region"
                      value={addressFormData.region}
                      onChange={handleChange}
                      placeholder="Region"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="zip_code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zip_code"
                      id="zip_code"
                      value={addressFormData.zip_code}
                      onChange={handleChange}
                      placeholder="Zip Code"
                      className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                    />
                  </div>
                  <PrimaryButton type="submit">Add Address</PrimaryButton>
                </form>
              )}
            </div>
            <div className="flex p-6 -mt-6 justify-between items-center">
              <div className="text-lg font-montserrat italic mr-56">
                Default Shipping Address
              </div>
              <div className="flex">
                <PrimaryButton className="w-28 ml-4">Edit</PrimaryButton>
                <PrimaryButton className="w-48 ml-4">
                  Delete Address
                </PrimaryButton>
              </div>
            </div>

            <div className=" container mt-9 mb-12">
              <tbody>
                {customer.customer_addresses.map((address, index) => (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td
                          colSpan="2"
                          className="px-4 py-6 text-left font-[montserrat] font-bold"
                        >
                          Default Shipping Address
                        </td>
                      </tr>
                    ) : (
                      <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                        <td
                          colSpan="2"
                          className="px-4 py-6 text-left font-[montserrat] font-bold"
                        >
                          Address {index}
                        </td>
                      </tr>
                    )}

                    <tr key={`street-${index}`}>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Street
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {address.street}
                      </td>
                    </tr>
                    <tr key={`barangay-${index}`}>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Barangay
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {address.barangay}
                      </td>
                    </tr>
                    <tr key={`city-${index}`}>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        City
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {address.city}
                      </td>
                    </tr>
                    <tr key={`region-${index}`}>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Region
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {address.region}
                      </td>
                    </tr>
                    <tr key={`zip-${index}`}>
                      <td className="px-4 py-6 text-left font-[montserrat] font-bold">
                        Zip Code
                      </td>
                      <td className="px-4 py-6 text-right font-[montserrat] w-2/3">
                        {address.zip_code}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressBook;
