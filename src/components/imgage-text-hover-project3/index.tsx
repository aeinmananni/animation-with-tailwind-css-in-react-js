import styles from "./style.module.css";
import images from "./image/image_John-Wick4_2.webp";
const ImageTextHoverProject3 = () => {
  return (
    <>
      <div
        className={`${styles.ImageHoverd} w-80 h-80 duration-500 border overflow-hidden rounded-lg relative group flex justify-center `}
      >
        <img
          src={images}
          alt=""
          className="h-full object-cover rounded-lg group-hover:rotate-6 duration-500 group-hover:scale-110 absolute"
        />
        <span className="absolute z-30 w-full text-white left-[13%] font-bold text-2xl top-12 opacity-0 group-hover:opacity-100">
          John-Wick4_2_Movies
        </span>
      </div>
    </>
  );
};

export default ImageTextHoverProject3;
