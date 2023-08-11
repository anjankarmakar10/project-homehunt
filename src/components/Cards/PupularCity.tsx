import City from "../../models/City";

interface Props {
  city: City;
}

const PupularCity = ({ city }: Props) => {
  return (
    <article>
      <img src={city.img} className="rounded-box w-60 h-60 object-cover" />
      <h4 className="font-semibold text-2xl mt-2">{city.name}</h4>
    </article>
  );
};
export default PupularCity;
