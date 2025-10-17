export default function Header () {

    return (
<div className="flex justify-between items-center bg-gray-300/80 p-3">
          <section>
            <img src="" alt="" />
            <h1>Maroc Digital Hub</h1>
          </section>

          <ul className="flex justify-between gap-4 m-2">
            <a href="">Accueil</a>
            <a href="">Startups</a>
            <a href="">Événements</a>
            <a href="">Mes Événements</a>
            <a href="">Dashboard</a>
          </ul>

          <button className="bg-[#5B90EB] text-white text-lg p-2 rounded-lg  hover:bg-blue-800 cursor-pointer "
           >
            Connexion
          </button>
        </div>
        )
        
}