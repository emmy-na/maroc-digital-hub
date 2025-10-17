//src/components/sections/DerniersAjouts.jsx

import React from "react";
import StartupCard from "../cards/startupCard.jsx";
import { useStartups } from "../contexts/StartupContext"; 

function DerniersAjouts() {
  const { startups } = useStartups();

  const startupsArray = Array.isArray(startups) ? startups : [];

  if (startupsArray.length === 0) {
    return <p>Aucune startup ajoutée pour le moment.</p>;
  }

  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center max-w-7/8">
      <h2 className="text-xl self-start font-bold text-black">
        Derniers Ajouts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {startupsArray.slice(-4).map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
}

export default DerniersAjouts;
