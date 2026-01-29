import React, { useState } from "react";
import { characters } from "./data/characters"; // your data file
import bg from "./assets/SchoolBG.png";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="relative min-h-screen">
      {/* bg image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div
        className="absolute inset-0 bg-black opacity-60"
      ></div>

      {/* content */}
      <div className="relative z-10 text-white p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-5">
          MBTL Knowledge Checks
        </h1>
        <h1 className="font-bold text-center mb-10">
          Created by Phantom
        </h1>

        {/* character select grid*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((char) => (
            <div
              key={char.name}
              className="bg-white bg-opacity-80 text-black rounded-lg p-6 cursor-pointer hover:bg-opacity-100 transition
              hover:scale-105
              "
              onClick={() => setSelectedCharacter(char)}
            >
      
              <h2 className="text-lg font-bold">{char.name}</h2>
              <p className="text-sm">{char.archetype}</p>
              {/* Character image in card */}
              {char.image && (
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-32 object-cover mb-2 rounded scale-125 object-[50%_0%]"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Character modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          6
          <div
            className="absolute inset-0 bg-black opacity-70"
            onClick={() => setSelectedCharacter(null)} // click outside to close
          ></div>

          {/* Modal content */}
         <div className="bg-white rounded-lg p-6 max-w-lvh relative text-black z-10 overflow-y-auto max-h-[80vh]">
          <button
            className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
            onClick={() => setSelectedCharacter(null)}
          >
            ✕
          </button>

          <h2 className="text-4xl font-bold mb-2">{selectedCharacter.name}</h2>
          <p className="mb-2 font-semibold">Archetype: {selectedCharacter.archetype}</p>
          <p className="mb-4 font-semibold">Has Invulnerable DP: {selectedCharacter.dp}</p>

          {/* Knowledge list */}
          <div className="space-y-4">
            {selectedCharacter.knowledge.map((k) => (
              <div key={k.id} className="p-3 border rounded space-y-2">
                <h3 className="font-bold text-2xl">{k.title}</h3>
                <p className="wrap-break-word">{k.description}</p>

                {k.media && (
                  k.media.endsWith(".mp4") ? (
                    <video
                      src={k.media}
                      controls  // <- only play when user clicks
                      className="mx-auto w-3/4 h-auto rounded object-cover"
                    />
                  ) : (
                    <img
                      src={k.media}
                      alt={k.title}
                      className="mx-auto w-3/4 h-auto rounded object-cover"
                    />
                  )
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    )}
  </div>
  );
}

export default App;
