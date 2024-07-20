"use client";
import supabase from "@/config/supabaseClient";
import Addschool from "@/pages/addschool";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Trash } from "react-feather";
import { Edit } from "react-feather";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schoolData, setSchoolData] = useState();
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("school data").select();

    if (error) {
      setSchoolData(null);
      console.log("error");
    }

    if (data) {
      setSchoolData(data);
    }
  };

  const handleOpenModal = () => {
    setCurrentData(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleEdit = (data, index) => {
    setCurrentData(data);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("school data").delete().eq("id", id);

    if (error) {
      console.error("Error deleting data:", error);
    } else {
      setSchoolData(schoolData.filter((data) => data.id !== id));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="my-12">
      <div className="mx-auto max-w-5xl  flex justify-end gap-32">
        <button
          onClick={handleOpenModal}
          className="border text-green-500 font-bold p-3 rounded-xl hover:duration-300 hover:text-black"
        >
          Add Data Here
        </button>
        <Addschool
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          currentData={currentData}
          loadData={fetchData}
        />
      </div>
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {schoolData && (
          <div className="my-1 p-4  rounded-lg w-full max-w-5xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              {schoolData.map((data, index) => (
                <div
                  key={index}
                  className="p-1 border border-gray-200 rounded-lg"
                >
                  {data.image && (
                    <div>
                      <Image
                        src={data.image}
                        width={100}
                        height={100}
                        alt="Uploaded"
                        className="w-full h-fit object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="px-3 py-3">
                    <p className="text-sm font-bold">
                      Name-
                      {data.first_name}
                      {data.last_name}
                    </p>
                    <p className="text-sm"> {data.email}</p>
                    <p className="text-xs">{data.address}</p>
                    <p className="text-xs">{data.mobile_number}</p>
                  </div>
                  <div className="flex gap-2 p-3 ">
                    <button
                      onClick={() => handleEdit(data, index)}
                      className="bg-yellow-500 text-white rounded-full p-2"
                    >
                      <Edit size={15} />
                    </button>
                    <button
                      onClick={() => handleDelete(data.id)}
                      className="bg-red-500 text-white p-2 rounded-full"
                    >
                      <Trash size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
