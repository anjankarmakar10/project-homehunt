import { useState } from "react";
import City from "../../../models/City";
import PupularCity from "../../../components/Cards/PupularCity";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PopularLocations = () => {
  const [cities] = useState<City[]>([
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Guthia_mosque%2CBarisal.jpg",
      name: "Barishal",
      id: 1,
    },
    {
      img: "https://www.bproperty.com/blog/wp-content/uploads/0004-1-1.jpg",
      name: "Chattogram",
      id: 2,
    },
    {
      img: "https://media.istockphoto.com/id/1210768445/photo/skyscraper-in-dhaka-metropolitan-area.jpg?s=612x612&w=0&k=20&c=qGFV2qpVXkUNtm8KYT2avrSZwcBcoeM9wIp4LdADgrI=",
      name: "Dhaka",
      id: 3,
    },
    {
      img: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/01/28/khulna_md-repon-bhuiyan.jpg",
      name: "Khulna",
      id: 4,
    },
    {
      img: "https://universityadmissionbd.com/wp-content/uploads/2021/12/Rajshahi-Medical-University.jpg",
      name: "Rajshahi",
      id: 5,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Rangpur_Areal.jpg",
      name: "Rangpur",
      id: 6,
    },
    {
      img: "https://blogger.googleusercontent.com/img/a/AVvXsEh-AbPheyMLQfOtu7to3pqeM-WTISXA5XMy_bXQ2Tspz4e7_LVLKOlOANvbbm8CzbLiaGHJIP6YcJqybY9OZacWTB5xiREsgYLG_6KPptxZ_ck4AhKReqJ1JitWFEt6Nfnk57mrmMZJyb2KNqhHGB2RkA_NXHsc90CZC1qWU65tKU_U-FIESvvv3Nic5Q=w1200-h630-p-k-no-nu",
      name: "Mymensingh",
      id: 7,
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/01/59/80/view-from-outside.jpg",
      name: "Sylhet",
      id: 8,
    },
  ]);

  return (
    <section>
      <header className="text-2xl md:text-3xl font-bold mb-6">
        Popular destinations
      </header>
      <div>
        <Swiper
          width={100}
          slidesPerView={1}
          spaceBetween={5}
          loop={true}
          className="justify-center"
          breakpoints={{
            375: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
          }}
        >
          {cities.map((city) => (
            <SwiperSlide key={city.id}>
              <PupularCity city={city} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default PopularLocations;
