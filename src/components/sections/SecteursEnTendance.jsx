function secteursEnTendance() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center w-full">
      <h2 className="text-xl self-start  font-bold text-black">
        Secteurs en tendance
      </h2>
      <p className="text-sm self-start font-bold text-black">Découvrez les domaines d'innovation les plus dynamiques de l'écosystème startup marocain</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
        <a href="#" className="bg-[#6E62F2] p-4 rounded-lg  flex flex-col items-center shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
         
          <h3 className="text-xl self-start py-1 m-4 my-1 font-semibold text-white">
            IA
          </h3>
          <p className="text-xl self-start m-4 my-1 text-white">
            2 startups
          </p>
        </a>

        <a href="#" className="bg-[#4EC063] p-4 rounded-lg  flex flex-col items-center shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
         
          <h3 className="text-xl self-start py-1 m-4 my-1 font-semibold text-white">
            Fintech
          </h3>
          <p className="text-xl self-start m-4 my-1 text-white">
            3 startups
          </p>
        </a>

        <a href="#" className="bg-[#2770B8]/88 p-4 rounded-lg  flex flex-col items-center shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
         
          <h3 className="text-xl self-start py-1 m-4 my-1 font-semibold text-white">
            E-commerce
          </h3>
          <p className="text-xl self-start  m-4 my-1 text-white">
            5 startups
          </p>
        </a>
        <a href="#" className="bg-[#F25252] p-4 rounded-lg  flex flex-col items-center shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
         
          <h3 className="text-xl self-start py-1 m-6 my-1 font-semibold text-white">
            Tourisme
          </h3>
          <p className="text-xl self-start m-6 my-1 text-white">
            1 startup
          </p>
        </a>
        <a href="#" className="bg-[#F47E2A] p-4 rounded-lg flex flex-col items-center shadow-[6px_2px_4px_rgba(0,0,0,0.9)]">
         
          <h3 className="text-xl self-start py-1 m-6 my-1 font-semibold text-white">
            HealthTech
          </h3>
          <p className="text-xl self-start  m-6 my-1 text-white">
            2 startups
          </p>
        </a>
      </div>
    </div>
  );
}
export default secteursEnTendance;
