import { useState } from "react";

export default function ExampleCar() {
  const [url, setUrl] = useState("./images/images/red-car.jpg");
//   const handleRed = () => {
// setUrl("./images/images/red-car.jpg");

//   };
//   const handleBlack = () => {
//     setUrl("./images/images/black-car.jpg");
//   };
//   const handleSilver = () => {
//     setUrl("./images/images/silver-car.jpg");
//   };
const handleChangeUrl = (url) =>{
    setUrl(url)
}
  return (
    <div>
      <h1>Example car</h1>
      <div className="grid grid-cols-2">
        <div>
          <img src={url} alt="" />
        </div>
        <div>
          <button onClick={() => handleChangeUrl("./images/images/red-car.jpg")} className="text-white bg-danger box-border px-4 py-2">
            Red
          </button>
          <button onClick={() => handleChangeUrl("./images/images/black-car.jpg")} className="text-white bg-dark box-border px-4 py-2">
            Black
          </button>
          <button onClick={() => handleChangeUrl("./images/images/silver-car.jpg")} className="text-white bg-neutral-500 box-border px-4 py-2">
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}
