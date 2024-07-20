"use client";
import supabase from "@/config/supabaseClient";
import Addschool from "@/pages/addschool";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Trash } from "react-feather";
import { Edit } from "react-feather";

const HomePage = () => {
  console.log("supabase", supabase)
  // const [schoolData, setSchoolData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schoolData, setSchoolData] = useState();
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const {data, error} = await supabase
      .from('school data')
      .select()

      if(error) {
        setSchoolData(null);
        console.log("error");
      }

      if(data) {
        setSchoolData(data)
      }
    }
   fetchData()
  }, [])

  const handleOpenModal = () => {
    setCurrentData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  // const loadData = () => {
  //   const data = localStorage.getItem("schoolData");
  //   if (data) {
  //     setSchoolData(JSON.parse(data));
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const handleEdit = (data, index) => {
    setCurrentData(data);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('school data')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Error deleting data:", error);
    } else {
      setSchoolData(schoolData.filter((data) => data.id !== id));
    }
  };

  return (
    <section className="my-12">
      <div>
        <h3 className="text-4xl font-bold text-center my-2">
          School Search Web App
        </h3>
      </div>
      <div className="justify-center">
        <div className="flex justify-center gap-12 ">
          <button
            onClick={handleOpenModal}
            className="bg-black text-white p-3 rounded-2xl"
          >
            Add Data Here
          </button>
          <Addschool
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            currentData={currentData}
            currentIndex={currentIndex}
            // loadData={loadData}
          />
          <button
            // onClick={loadData}
            className="bg-green-400 text-white p-3 rounded-2xl"
          >
            Show Data Here
          </button>
        </div>
        <div className="container mx-auto flex flex-wrap items-center justify-center">
          {schoolData && (
            <div className="my-1 p-4 shadow-lg shadow-gray-400 rounded-lg w-full max-w-5xl ">
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {schoolData.map((data, index) => (
                  <div
                    key={index}
                    className="p-1 border border-gray-200 rounded-lg"
                  >
                    {data.file && (
                      <div>
                        <Image
                          src={data.file}
                          width={100}
                          height={100}
                          alt="Uploaded"
                          className="w-full h-fit object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex ">
                      <p className="text-sm">
                        {data.first_name}
                        {data.last_name}
                      </p>
                    </div>
                    <p className="text-sm"> {data.email}</p>
                    <p className="text-sm">{data.address}</p>
                    <p>{data.mobile_number}</p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleEdit(data, index)}
                        className="bg-yellow-500 text-white p-2 rounded-full"
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="bg-red-500 text-white p-2 rounded-full"
                      >
                        <Trash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
