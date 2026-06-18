import { useState } from "react";
import data from "./data.json";

export default function TryGlasses() {
  const [glasses, setGlasses] = useState(data);

 const [url, setUrl] = useState(glasses[0]); 
const handleChangeUrl = (glass) => {
    setUrl(glass)
}

  const renderGlassesList = () => {
   const glassesList =  glasses.map((glass) => {
      return (
        <img key={glass.id}
              src={glass.url}
              alt={glass.name}
              className="h-14 cursor-pointer border border-gray-300 p-1"
      onClick={() => handleChangeUrl(glass)}
      />)
      
    });
    return glassesList;
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517841905240-472988babdf9')",
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen bg-black/40">
        {/* Header */}
        <div className="bg-black/30 py-5">
          <h1 className="text-center text-3xl font-bold tracking-wider text-white">
            TRY GLASSES APP ONLINE
          </h1>
        </div>

        {/* Preview Section */}
        <div className="mx-auto mt-12 flex max-w-5xl justify-center gap-32">
          {/* Left Image */}
          <div className="relative w-[280px]">
            <img
              src="./glassesImage/model.jpg"
              alt="model"
              className="w-full bg-white object-cover"
            />

            {/* Glasses Overlay */}
            <img
              src={url.url}
              alt="glasses"
              className="absolute left-1/2 top-[90px] w-[170px] -translate-x-1/2 opacity-70"
            />

            {/* Info Card */}
            <div className="absolute bottom-0 left-0 w-full bg-orange-300/80 p-4">
              <h3 className="text-xl font-bold text-indigo-700">FENDI F8750</h3>

              <p className="mt-2 text-sm font-semibold text-white">
                Light pink square lenses define these sunglasses, ending with
                another of pearl effect tip.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[280px]">
            <img
              src="./glassesImage/model.jpg"
              alt="model"
              className="w-full bg-white object-cover"
            />
          </div>
        </div>

        {/* Glasses List */}
        <div className="mx-auto mt-12 w-[75%] bg-white p-8">
          <div className="flex flex-wrap justify-center gap-5">
            {renderGlassesList()}
          </div>
        </div>
      </div>
    </div>
  );
}
