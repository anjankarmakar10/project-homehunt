import { useState } from "react";
import Review from "../../../models/Review";
import reviewsData from "../../../data/reviews";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
  const [reviews] = useState<Review[]>(reviewsData);
  return (
    <>
      <div className="container mx-auto px-4">
        <header className="text-2xl md:text-3xl font-bold mb-6 mt-6">
          Reviews
        </header>
      </div>
      <div>
        <div className="px-8">
          <Swiper slidesPerView={1} loop spaceBetween={20}>
            {reviews.map((review) => (
              <SwiperSlide>
                <div className="border rounded-lg shadow-md  mb-4 flex items-center p-10 md:p-20 flex-col text-center gap-4 md:flex-row md:gap-0 md:text-start">
                  <img
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    src={review.image}
                    alt="Customer Image"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-lg mb-1">
                      {review.name}
                    </div>
                    <div className="text-neutral md:line-clamp-3">
                      {review.review}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Reviews;
