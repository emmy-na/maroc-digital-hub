//scr/components/sections/SecteurSearch.jsx

import React from "react";
import StartupCard from "../cards/startupCard";
import { useStartups } from "../contexts/StartupContext";

export default function SecteurSearch() {
  const { filteredStartups } = useStartups();

  // Ensure it's always an array
  const startupsArray = Array.isArray(filteredStartups) ? filteredStartups : [];

  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center max-w-7/8">
      <h2 className="text-xl self-start font-bold text-black">
        Résultats de recherche
      </h2>

      {startupsArray.length === 0 ? (
        <p>Aucune startup trouvée.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {startupsArray.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      )}
    </div>
  );
}
