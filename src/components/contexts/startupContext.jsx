// StartupContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { fetchAllData } from "../api";


const StartupContext = createContext();

export const StartupProvider = ({ children }) => {
  const [startups, setStartups] = useState([]); // <- Make sure it's an array
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [filteredStartups, setFilteredStartups] = useState([]);

 useEffect(() => {
  const getData = async () => {
    console.log("🔍 Fetching data...");
    const data = await fetchAllData();
    console.log("📦 Raw data received:", data);
    
    if (data && Array.isArray(data.startups)) {
      console.log("✅ Startups array:", data.startups);
      setStartups(data.startups);
    } else {
      console.log("❌ No startups array found. Data structure:", data);
      setStartups([]);
    }
  };
  getData();
}, []);

  // Filter logic
  useEffect(() => {
    let filtered = [...startups];

    if (searchTerm) {
      filtered = filtered.filter((s) =>
        s.nom.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSector) {
      filtered = filtered.filter((s) => s.secteur === selectedSector);
    }

    setFilteredStartups(filtered);
  }, [startups, searchTerm, selectedSector]);

  return (
    <StartupContext.Provider
      value={{
        startups,
        filteredStartups,
        searchTerm,
        setSearchTerm,
        selectedSector,
        setSelectedSector,
      }}
    >
      {children}
    </StartupContext.Provider>
  );
};

export const useStartups = () => {
  const context = useContext(StartupContext);
  if (!context) {
    throw new Error("useStartups must be used within a StartupProvider");
  }
  return context;
};
