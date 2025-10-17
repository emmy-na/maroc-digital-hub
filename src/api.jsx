//src/api.jsx

// For Vite, you might need to fetch it as a static asset
export const fetchAllData = async () => {
  try {
    console.log("🔍 Fetching data from db.json");
    
    // Fetch from public folder or use direct import
    const response = await fetch('/db.json');
    
    if (!response.ok) {
      throw new Error('Failed to load db.json');
    }
    
    const data = await response.json();
    console.log("✅ Data loaded:", data);
    console.log("📊 Startups count:", data.startups?.length || 0);
    
    return data;
  } catch (error) {
    console.error("❌ Error loading data:", error);
    return { startups: [] };
  }
};


// import axios from "axios";

// const DATA_URL = "http://localhost:3100/db.json";

// export const fetchAllData = async () => {
//   try {
//     const response = await axios.get(DATA_URL);
//     console.log("fetchAllData response:", response);
//     return response.data;
//   } catch (error) {
//     console.error("Erreur dans fetchAllData :", error);
//     throw error;
//   }
// };

// export const fetchStartupDuMois = async () => {
//   try {
//     const data = await fetchAllData();
//     console.log("Données totales :", data);
//     if (data && data.startup_du_mois) {
//       console.log("Startup du mois trouvée :", data.startup_du_mois);
//       return data.startup_du_mois;
//     }
//     return null;
//   } catch (error) {
//     throw error;
//   }
// };
