// scr/components/sections/apropossection.jsx
import { useState } from "react";
import { useStartups } from "../contexts/StartupContext";

export default function AproposSection() {
  const { setSearchTerm, setSelectedSector } = useStartups();
  const [localSearch, setLocalSearch] = useState("");
  const [localSector, setLocalSector] = useState("");

const handleSearch = () => {
  setSearchTerm(localSearch || "");
  setSelectedSector(localSector || "");
    window.scrollTo({ top: 800, behavior: "smooth" }); // pour scroller vers les résultats
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-gradient-to-r from-[#8EE4E6]/50 to-[#2770B8]/88 text-center">
      <h1 className="text-3xl font-bold">Connecter l'écosystème tech marocain</h1>
      <p className="text-xl font-bold">
        Découvrez les startups innovantes du Maroc, participez à des événements
        tech exclusifs et rejoignez une communauté dynamique d'entrepreneurs et
        d'investisseurs.
      </p>

      {/* SECTION CHIFFRES */}
      <section className="flex w-full justify-around gap-2">
        <p className="text-lg font-bold text-white" style={{ WebkitTextStroke: "1px #295C8F" }}>
          150+ <br /> Startups
        </p>
        <p className="text-lg font-bold text-white" style={{ WebkitTextStroke: "1px #295C8F" }}>
          50+ <br /> Investisseurs
        </p>
        <p className="text-lg font-bold text-white" style={{ WebkitTextStroke: "1px #295C8F" }}>
          25+ <br /> Événements
        </p>
      </section>

      {/* BARRE DE RECHERCHE */}
      <section className="w-full flex justify-around items-center bg-gray-300/50 rounded-2xl gap-4 p-2">
        <input
          type="text"
          placeholder="Nom de la startup, secteur ..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="bg-gray-100 p-2 w-3/6 rounded-2xl text-[#2770B8]/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={localSector}
          onChange={(e) => setLocalSector(e.target.value)}
          className="bg-gray-100 p-2 w-2/6 rounded-2xl text-[#2770B8]/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Tous les secteurs</option>
          <option value="IA">IA</option>
          <option value="FinTech">FinTech</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Tourisme">Tourisme</option>
          <option value="HealthTech">HealthTech</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-700 p-2 w-1/6 rounded-2xl text-blue-100 hover:bg-blue-800 cursor-pointer"
        >
          Recherche
        </button>
      </section>
    </div>
  );
}

