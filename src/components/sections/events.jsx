import EventsCard from "../cards/EventsCard";
function Events() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center max-w-full">
<section className="flex w-full items-center justify-between">
  <h2 className="text-xl font-bold text-black">
    Événements à venir
  </h2>
  <button className="mt-1 border border-black bg-transparent text-black px-4 py-2 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-blue-600 hover:text-white">
    Voir tous les Événements
  </button>
</section>
      <div className="self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5">
<EventsCard/>

      </div>
    </div>
  );
}
export default Events;
