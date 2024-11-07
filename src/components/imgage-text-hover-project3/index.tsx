import styles from "./style.module.css";
import images1 from "./image/image_John-Wick4_2.webp";
import images2 from "./image/image_John-Wick4.webp";
const ImageTextHoverProject3 = () => {
  return (
    <div className="flex gap-2">
      <div
        className={`${styles.ImageHoverd1} w-80 h-80 duration-500 border overflow-hidden rounded-lg relative group flex justify-center `}
      >
        <img
          src={images1}
          alt=""
          className="h-full object-cover rounded-lg group-hover:rotate-6 duration-500 group-hover:scale-110 absolute"
        />
        <span className="absolute z-30 w-full text-white left-[13%] font-bold text-2xl top-12 opacity-0 group-hover:opacity-100">
          John-Wick4_2_Movies
        </span>
      </div>
      <div
        className={`${styles.ImageHoverd2} w-80 h-80 duration-500 border overflow-hidden rounded-lg relative group flex justify-center `}
      >
        <img
          src={images2}
          alt=""
          className="h-full object-cover rounded-lg group-hover:rotate-6 duration-500 group-hover:scale-110 absolute"
        />
        <span className="absolute z-30 w-full text-white left-[13%] font-bold text-2xl top-12 opacity-0 group-hover:opacity-100  duration-300 delay-100">
          John-Wick4_Movies
        </span>
      </div>
    </div>
  );
};

export default ImageTextHoverProject3;
