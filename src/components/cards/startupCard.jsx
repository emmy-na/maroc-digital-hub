export default function StartupCard({ startup }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center h-full">
      <img
        src={startup.logo_url}
        alt={startup.name}
        className="w-full h-40 bg-green-600 rounded-lg object-cover"
      />
      <h3 className="text-md self-start py-1 my-1 font-semibold text-blue-700">
        {startup.name}
      </h3>
      <p className="text-sm self-start py-1 my-1 text-gray-600">
        Description : {startup.description_courte}
      </p>
      <h6 className="text-sm bg-gray-400 px-2 py-1 rounded-lg self-start mt-auto">
        {startup.secteur}
      </h6>
    </div>
  );
}
