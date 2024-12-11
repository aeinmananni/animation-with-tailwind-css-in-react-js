import styles from "./style.module.css";
import { BsHeartFill } from "react-icons/bs";
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
      <i>
        <BsHeartFill color="red" size={187} className="animate-heart" />
      </i>
    </>
  );
};

export default AnimationsKeyFrams;
