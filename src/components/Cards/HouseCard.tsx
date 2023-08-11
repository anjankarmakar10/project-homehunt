import House from "../../models/House";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import LazyImage from "../Image/LazyImage";
interface Props {
  house: House;
}

const HouseCard = ({ house }: Props) => {
  return (
    <article className="card w-full bg-base-100 shadow  overflow-hidden cursor-pointer rounded-md border border-transparent hover:border-neutral transition">
      <figure className="p-8 md:p-4">
        <LazyImage
          className="w-full h-64 md:h-60 rounded-xl object-cover"
          src={house.house_img}
          alt={house.info}
        />
      </figure>
      <div className="card-body p-8 md:p-4 pt-0 text-center md:text-start">
        <div className="flex justify-between items-center flex-col gap-4 md:flex-row ">
          <h2 className="card-title">{house.location}</h2>
          <div className="border px-3 py-1 rounded text-sm">{house.rating}</div>
        </div>
        <div className="flex gap-1 items-center mx-auto md:mx-0">
          <FaBangladeshiTakaSign />
          <span className="font-medium">{house.fare}</span>
        </div>

        <div className="text-sm font-medium ">
          <div>House Type: {house.type}</div>
          Available Date: {house.available_date}
        </div>
      </div>
    </article>
  );
};
export default HouseCard;
