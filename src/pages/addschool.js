import supabase from "@/config/supabaseClient";
import React, { useEffect, useState } from "react";
import { X } from "react-feather";

const Addschool = ({ isOpen, onClose, currentData, currentIndex, loadData }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    mobile_number: "",
    // file: null,
  });
  // const [fileName, setFileName] = useState("");

  // useEffect(() => {
  //   if (currentData) {
  //     setFormData(currentData);
  //     if (currentData.file && typeof currentData.file === "string") {
  //       setFileName(currentData.file);
  //     } else {
  //       setFileName("");
  //     }
  //   } else {
  //     setFormData({
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       address: "",
  //       mobile_number: "",
  //       file: null,
  //     });
  //     setFileName("");
  //   }
  // }, [currentData]);

  // if (!isOpen) return null;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, file });
  //   setFileName(file.name);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let fileBase64 = "";
  //   if (formData.file && typeof formData.file === "object") {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(formData.file);
  //     reader.onloadend = () => {
  //       fileBase64 = reader.result;
  //       saveData(fileBase64);
  //     };
  //   } else {
  //     fileBase64 = formData.file;
  //     saveData(fileBase64);
  //   }
  // };


  // const saveData = (fileBase64) => {
  //   let storedData = JSON.parse(localStorage.getItem("schoolData")) || [];
  //   if (!Array.isArray(storedData)) {
  //     storedData = [];
  //   }
  //   const newFormData = { ...formData, file: fileBase64 };
  //   if (currentIndex !== null) {
  //     storedData[currentIndex] = newFormData;
  //   } else {
  //     storedData.push(newFormData);
  //   }
  //   localStorage.setItem("schoolData", JSON.stringify(storedData));
  //   loadData();
  //   setFormData({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     address: "",
  //     mobile_number: "",
  //     file: null,
  //   });
  //   setFileName("");
  //   onClose();
  // };

  // const handleSubmit = async(e) => {
  //   e.preventDefault()
     
  //   // if(!first_name || !last_name || !email || !address || !mobile_number){
  //   //   return <h1>Please fill all details</h1>
  //   // }

  //   const {data, error} = await supabase
  //   .from("school data")
  //   .insert([formData])

  //   if (error) {
  //     console.error("Error inserting data:", error);
  //   } else {
  //     console.log("Data inserted:", data);
  //     onClose();  // Close the modal after successful insertion
  //   }
  // }
  useEffect(() => {
    if (currentData) {
      setFormData(currentData);
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        mobile_number: "",
      });
    }
  }, [currentData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentData) {
      // Update existing data
      const { data, error } = await supabase
        .from("school data")
        .update(formData)
        .eq("id", currentData.id);

      if (error) {
        console.error("Error updating data:", error);
      } else {
        console.log("Data updated:", data);
        onClose();
      }
    } else {
      // Insert new data
      const { data, error } = await supabase
        .from("school data")
        .insert([formData]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted:", data);
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <X size={30} className="bg-gray-200 rounded-full p-2" />
        </button>
        <h3 className="text-3xl font-semibold mb-6 text-center">{currentData ? "Edit School Data" : "Add School Data"}</h3>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">First Name</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                placeholder="First Name"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                placeholder="Last Name"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">Contact mobile_number</label>
              <input
                type="tel"
                name="mobile_number"
                value={formData.mobile_number}
                placeholder="Contact mobile_number"
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                required
              />
            </div>
            {/* <div className="flex items-center gap-4">
              <label className="w-1/3 text-sm font-semibold text-gray-700 text-right">Upload Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="p-3 border border-gray-300 rounded-lg flex-1"
              />
              {fileName && (
                <span className="text-sm text-gray-500">{fileName}</span>
              )}
            </div> */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300"
            >
              {currentData ? "Update Details" : "Add Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addschool;
