import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: Props) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt={alt}
      effect="blur"
      src={src}
    />
  );
};
export default LazyImage;
