import React, { useEffect, useState } from "react";
import { FaUtensils } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Service from "./Service/Service";

const Searvices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    return () => {
      fetch("https://himu-kitchen-server.vercel.app/services")
        .then((res) => res.json())
        .then((data) => setServices(data.data));
    };
  }, []);

  useTitle("Services");
  return (
    <>
      <section className="p-4">
        <div className="servicesTitle">
          <h1
            className="text-center py-2 text-3xl font-bold text-yellow-400"
            style={{ fontFamily: "Dancing Script" }}
          >
            What I'm Providing ?{" "}
          </h1>
          <h1 className="justify-center items-center gap-4 text-5xl flex font-bold text-gray-700">
            Services
            <FaUtensils className="text-yellow-400"></FaUtensils>
          </h1>
        </div>
        <div className="servicesContainer">
          {services.map((service) => {
            return <Service key={service._id} service={service}></Service>;
          })}
        </div>
      </section>
    </>
  );
};

export default Searvices;
