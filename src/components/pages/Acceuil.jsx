import AproposSection from "../sections/apropossection";
import SecteurSearch from "../sections/SecteurSearch";
import DerniersAjouts from "../sections/DerniersAjouts";
import SecteursEnTendance from "../sections/SecteursEnTendance";
import Events from "../sections/events";
// import StartupDuMois from "../sections/StartupDuMois";



export default function Acceuil() {
  return (
    <>
      <AproposSection />
       <SecteurSearch />
      <DerniersAjouts />
      <SecteursEnTendance />
      <Events />
      {/* <StartupDuMois /> */}
    </>
  );
}


