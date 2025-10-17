export default function Publier() {
  return (
    <form className="flex flex-col w-[57%] max-w-lg min-h-[50%] m-4 p-6 border border-gray-300 rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100">
      <section className="flex flex-col justify-around gap-3">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold">Publier une nouvelle startup</h4>
          <button type="button" className="text-2xl text-gray-500 cursor-pointer">X</button>
        </div>

        <label htmlFor="startupName">Nom de la startup *</label>
        <input
          id="startupName"
          type="text"
          className="border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
        />

        <label htmlFor="description">Description *</label>
        <input
          id="description"
          type="text"
          className="border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
        />

        <label htmlFor="secteur">Secteur *</label>
        <select
          id="secteur"
          aria-label="Sélectionner un secteur"
          className="border border-gray-500 bg-gray-100 rounded-lg h-[40px] px-2"
        >
          <option value="">Sélectionner un secteur</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>

        <label htmlFor="image">URL de l’image (optionnel)</label>
        <input
          id="image"
          type="text"
          placeholder="https://example.com/image.jpg"
          className="border border-gray-500 h-[40px] bg-gray-100 rounded-lg px-2"
        />
      </section>

      <section className="flex justify-start items-center gap-4 mt-6">
        <button
          type="submit"
          className="bg-black text-lg text-white w-2/5 p-2 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Publier
        </button>
        <button
          type="button"
          className="bg-gray-400 border border-gray-800 text-lg text-white w-2/5 p-2 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Annuler
        </button>
      </section>
    </form>
  );
}
