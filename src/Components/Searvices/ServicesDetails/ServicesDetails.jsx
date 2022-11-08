import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";

const ServicesDetails = () => {
  const service = useLoaderData();
  const {
    service_name,
    service_price,
    service_description,
    img,
    service_category,
    rating,
    service_status,
    service_provider,
    service_provider_img,
  } = service.data;
  console.log(service.data);

  return (
    <>
      <section className="p-4">
        <div>
          <PhotoProvider>
            <PhotoView src={img}>
              <figure>
                <img
                  src={img}
                  alt={service_name}
                  className="rounded-lg mx-auto"
                  style={{ height: "100%", width: "40%" }}
                />
              </figure>
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title text-yellow-400 font-bold text-3xl">
              {service_name}
            </h2>
            <p>{service_description}</p>

            <div className="flex gap-4 justify-start">
              <span className=" bg-primary p-2">Category : {service_category}</span>
              <span className=" bg-primary p-2">Status : {service_status}</span>
              <div>
                <span className="text-[1rem] mx-4 font-bold">
                  Price: ৳ {service_price}
                </span>
              </div>
            </div>
            <div className="card-actions">
              <button className="btn btn-warning">Order Now</button>
            </div>
            <div className="flex gap-2 mt-2 justify-center items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="badge bg-warning mx-4 font-bold">{rating}</span>
            </div>

            <div className="divider"></div>
            <div>
              <h2 className="text-2xl text-center font-bold text-yellow-400">
                Give Your Valuabele Revews
              </h2>
              <div></div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2">
              <img
                src={service_provider_img}
                alt={service_name}
                style={{ width: "5rem" }}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-yellow-400">
                {service_provider}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;