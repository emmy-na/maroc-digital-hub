// src/components/StartupDuMois.jsx

import React, { useState, useEffect } from 'react';
import { fetchStartupDuMois } from '../../api'; 
export default function StartupDuMois() {
    const [startup, setStartup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        const loadStartup = async () => {
            try {
               
                const data = await fetchStartupDuMois();
                console.log(data);
                setStartup(data);
                setError(null);
            } catch (err) {
                
                setError("Impossible de charger les données de la Startup du mois. Veuillez vérifier l'API.");
                setStartup(null);
                console.log(err)
            } finally {
                setLoading(false);
            }
        };

        loadStartup();
    }, []);
    

    if (loading) {
        return <div className="text-center py-10 text-[#4D112A] font-medium">Chargement des données...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-600 font-bold">{error}</div>;
    }

    if (!startup) {
        return <div className="text-center py-10 text-gray-500">Aucune Startup du mois n'est disponible.</div>;
    }

    // Si les données sont chargées et valides
    return (
<div className="flex w-full h-fit items-center p-4 py-2 m-2 my-6 border border-[#4D112A]/58 shadow-lg rounded-lg">
  <img
    src={startup.logo_url}
    alt={`Logo de ${startup.nom}`}
    className="w-2/7 h-full object-contain p-2 rounded-lg mx-8"
  />
  <div className="flex flex-col justify-start h-full py-2 overflow-hidden">
    <h1 className="text-lg font-bold self-start mb-1">Startup du mois</h1>
    <h2 className="text-xl font-semibold text-[#4D112A] truncate">{startup.nom}</h2>
    <p className="text-sm text-gray-600 my-1 line-clamp-2">
      {startup.description_longue || startup.description_courte}
    </p>
    <h6 className="text-sm w-fit text-white text-center bg-[#4D112A]/58 px-4 py-1 rounded-xl self-start mt-2">
      {startup.secteur}
    </h6>
  </div>
</div>

    );
}