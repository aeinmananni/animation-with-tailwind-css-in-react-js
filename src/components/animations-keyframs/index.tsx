// import { BsHeartFill } from "react-icons/bs";
// import styles from "./style.module.css";
// import { FaHeart } from "react-icons/fa";
// import { FaEarthAmericas } from "react-icons/fa6";
// import { GiNetworkBars } from "react-icons/gi";
const AnimationsKeyFrams = () => {
  // const Light = [
  //   { letter: "L", delay: 0.25 },
  //   { letter: "I", delay: 0.5 },
  //   { letter: "G", delay: 0.75 },
  //   { letter: "H", delay: 1.2 },
  //   { letter: "T", delay: 1.5 },
  // ];
  return (
    <>
      {/* <div className={styles.div3}></div> */}
      {/* <div className={styles.div1}></div>
      <div className={styles.div2}></div> */}
      {/* <div className={styles.div4}>
        <h1 className={styles.hStyle}>Cooming</h1>
        <h1 className={styles.hStyle}>Soon</h1>
      </div> */}
      {/* <div className="perspective">
        <div className={styles.div5} />
      </div> */}
      {/* <div className="flex items-center gap-1">
        <h1 className={styles.text1}>I Love</h1>
        <h1 className={styles.text2}></h1>
      </div> */}
      {/* <h1 className={styles.shaking_text}>Shaking-Text-With hovered</h1> */}
      {/* <div role="button" className={styles.buttonRole}>
        Hover me
      </div> */}
      {/* <div className={styles.ParentLight}>
        {Light.map((it, index) => (
          <span
            className={`${styles.lightChild} `}
            key={index}
            style={{ animationDelay: `${it.delay}s` }}
          >
            {it.letter}
          </span>
        ))}
      </div> */}
      {/* <i>
        <BsHeartFill color="red" size={187} className="animate-heart" />
      </i> */}
      {/* <div className="text-[180px] text-transparent bg-clip-text bg-[url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png')] animate-textBackground">
        ANIMATION CSS
      </div> */}

      {/* <div className={styles.parent}>
        <span style={{ animationDelay: "0.2s" }} className={styles.sp} />
        <span style={{ animationDelay: "0.5s" }} className={styles.sp} />
        <span style={{ animationDelay: "0.8s" }} className={styles.sp} />
        <span style={{ animationDelay: "1s" }} className={styles.sp} />
        <span style={{ animationDelay: "1.2s" }} className={styles.sp} />
      </div> */}
      {/* <div className="flex justify-center gap-2 relative  items-center">
        <div className={`${styles.iconsDiv} group`}>
          <div className="rounded-full w-[93%] h-[93%] border-2 border-dashed border-white absolute top-1 left-0.5 opacity-0 group-hover:opacity-100 group-hover:animate-rotation2" />
          <div className="w-full h-full bg-transparent group-hover:bg-white rounded-full duration-300 flex justify-center items-center">
            <FaHeart size={32} className="text-sky-900" />
          </div>
        </div>
        <div className={`${styles.iconsDiv} group`}>
          <div className="rounded-full w-[93%] h-[93%] border-2 border-dashed border-white absolute top-1 left-0.5 opacity-0 group-hover:opacity-100 group-hover:animate-rotation2" />
          <div className="w-full h-full bg-transparent group-hover:bg-white rounded-full duration-300 flex justify-center items-center">
            <FaEarthAmericas size={32} className="text-sky-900" />
          </div>
        </div>
        <div className={`${styles.iconsDiv} group`}>
          <div className="rounded-full w-[93%] h-[93%] border-2 border-dashed border-white absolute top-1 left-0.5 opacity-0 group-hover:opacity-100 group-hover:animate-rotation2" />
          <div className="w-full h-full bg-transparent group-hover:bg-white rounded-full duration-300 flex justify-center items-center">
            <GiNetworkBars size={32} className="text-sky-900" />
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center gap-4">
        <span
          style={{ animationDelay: "1s" }}
          className="text-8xl animate-moving2"
        >
          L
        </span>
        <span
          style={{ animationDelay: "1.2s" }}
          className="text-8xl animate-moving2"
        >
          O
        </span>
        <span
          style={{ animationDelay: "1.4s" }}
          className="text-8xl animate-moving2"
        >
          D
        </span>
        <span
          style={{ animationDelay: "1.6s" }}
          className="text-8xl animate-moving2"
        >
          I
        </span>
        <span
          style={{ animationDelay: "1.7s" }}
          className="text-8xl animate-moving2"
        >
          N
        </span>
        <span
          style={{ animationDelay: "1.8s" }}
          className="text-8xl animate-moving2"
        >
          G
        </span>
      </div>
    </>
  );
};

export default AnimationsKeyFrams;
