import styles from "./style.module.css";
// import { BsHeartFill } from "react-icons/bs";
import clsx from "clsx";
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

      <div className={styles.parent}>
        <span style={{ animationDelay: "0.2s" }} className={styles.sp} />
        <span style={{ animationDelay: "0.5s" }} className={styles.sp} />
        <span style={{ animationDelay: "0.8s" }} className={styles.sp} />
        <span style={{ animationDelay: "1s" }} className={styles.sp} />
        <span style={{ animationDelay: "1.2s" }} className={styles.sp} />
      </div>
    </>
  );
};

export default AnimationsKeyFrams;
