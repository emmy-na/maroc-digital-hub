export default function Login() {
  return (
    <div>
      <div
        id="Inscription"
        className="flex flex-col w-[80%] max-w-lg   border border-gray-300 rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200"
      >
        <button
          type="button"
          className="w-full bg-white text-2xl text-gray-500 text-end cursor-pointer px-2"
        >
          X
        </button>
        <section className="flex flex-col justify-center items-center  m-3 mb-6 mx-[10%]">
          <section className="flex justify-center items-center">
            <h3 className="w-fit bg-blue-600 text-lg text-white p-2 px-4 mx-2  hover:bg-amber-200 hover:text-red-700 cursor-pointer">
              Connexion
            </h3>
            <h3 className="w-fit bg-blue-600 text-sm text-white p-1 px-4 mx-2  hover:bg-amber-200 hover:text-red-700 cursor-pointer">
              Inscription
            </h3>
          </section>

          <form className="flex flex-col justify-center items-center w-9/10 h-full gap-2 p-8 bg-white rounded-2xl">
            <label htmlFor="">Email : </label>
            <input
              type="email"
              placeholder="Enter votre email"
              className="border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
            />

            <label htmlFor="">Mot de passe : </label>
            <input
              type="password"
              placeholder="Enter votre mot de passe "
              className="border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
            />

            <button
              type="submit"
              className="w-3/5 bg-[#5B90EB] text-lg text-white p-2 m-2 mt-8 rounded-lg  hover:bg-blue-600 cursor-pointer "
            >
              Connecte(e)
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Vous n’êtes pas encore inscrit ? <br />
              <a
                href="./VersionStatique.html#Inscription"
                className="font-black hover:underline"
              >
                Inscrivez-vous donc
              </a>
            </p>
          </form>
        </section>
      </div>
      <div
        id="Inscription"
        className="flex flex-col w-[80%] max-w-lg   border border-gray-300 rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200"
      >
        <button
          type="button"
          className="w-full bg-white text-2xl text-gray-500 text-end cursor-pointer px-2"
        >
          X
        </button>
        <section className="flex flex-col justify-center items-center  m-3 mb-6 mx-[10%]">
          <section className="flex justify-center items-center">
            
            <h3 className="w-fit bg-blue-600 text-sm text-white p-1 px-4 mx-2  hover:bg-amber-200 hover:text-red-700 cursor-pointer">
              Connexion
            </h3>
            <h3 className="w-fit bg-blue-600 text-lg text-white p-2 px-4 mx-2  hover:bg-amber-200 hover:text-red-700 cursor-pointer">
              Inscription
            </h3>           
          </section>

          <form className="flex flex-col justify-center items-center w-9/10 h-full gap-2 p-8 bg-white rounded-2xl">
            <label htmlFor="" className="w-full flex justify-between items-center mb-3">
              Nom Complet :{" "}
              <input
                type="text"
                placeholder="Votre nom complet"
                className="w-3/5 border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
              />
            </label>

            <label htmlFor="" className="w-full flex justify-between items-center mb-3">
              Email :{" "}
              <input
                type="email"
                placeholder="Votre email"
                className="w-3/5 border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
              />
            </label>

            <label htmlFor="" className="w-full flex justify-between items-center mb-3">
              Votre rôle :{" "}
              <select
                aria-label="Sélectionner votre rôle"
                className="w-3/5 border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
              >
                <option value="">Startup</option>
                <option value="">Investisseur</option>
                <option value="">Visiteur</option>
              </select>
            </label>

            <label htmlFor="" className="w-full flex justify-between items-center mb-3">
              Mot de passe :{" "}
              <input
                type="password"
                placeholder="Minimum 6 caractères"
                className="w-3/5 border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
              />
            </label>

            <label htmlFor="" className="w-full flex justify-between items-center mb-3">
              Confirmer mot de passe :{" "}
              <input
                type="password"
                placeholder="Répétez votre mot de passe"
                className="w-3/5 border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
              />
            </label>

            <button
              type="submit"
              className="w-3/5 bg-[#5B90EB] text-lg text-white p-2  mt-8 rounded-lg  hover:bg-blue-600 cursor-pointer "
            >
              S'inscrire
            </button>

            <p className="text-sm text-gray-500 text-center mt-2">
              Déjà un compte ?<br />
              <a
                href="./VersionStatique.html#Connexion"
                className="font-black hover:underline"
              >
                Se connecter
              </a>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
