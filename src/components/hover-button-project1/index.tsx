import "./styles.css";

const HoverButtonProject1 = () => {
  return (
    // <div className="floatingPieceBefore floatingPieceAfter border p-5 rounded-lg border-gray-500 overflow-hidden hover:text-white duration-300 relative">
    //   <span>hover me</span>
    // </div>
    // <div className="boldButtonWithHover border p-5 rounded-lg border-gray-500 overflow-hidden  hover:text-orange-500 hover:font-bold hover:-tracking-tighter  duration-500 relative">
    //   <span>hover me</span>
    // </div>
    // <div className="addBforeElementText overflow-hidden border p-5 rounded-lg border-gray-500   duration-500 relative ">
    //   <span>hover me</span>
    // </div>
    // <div className="hover-offset-button overflow-hidden border p-5 rounded-lg border-gray-500  hover:bg-red-500  duration-300 relative ">
    //   <span>hover me</span>
    // </div>
    // <div className="use-before-and-after overflow-hidden border p-5 rounded-lg border-gray-500    duration-300 relative ">
    //   <span>hover me</span>
    // </div>
    <div className="scale-button overflow-hidden border p-5 rounded-lg border-gray-500    duration-300 relative group">
      <span className="group-hover:invisible">hover me</span>
    </div>
  );
};

export default HoverButtonProject1;
