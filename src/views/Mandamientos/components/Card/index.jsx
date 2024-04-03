import { Link } from "react-router-dom";
const Card = ({ mandamiento }) => (
  <div className="bg-white shadow-md p-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-purple-100 border-t-4 border-purple-300">
    <h3 className="text-xl font-bold mb-2">{mandamiento.nombre}</h3>
    <p className="text-gray-700">ID: {mandamiento.id}</p>
    <p className="text-gray-700">Puntos: {mandamiento.nota}</p>
    {mandamiento.finished ? (
      <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"></path>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    ) : (
      <Link
        to={`/mandamiento/${mandamiento.id}`}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 pt-1"
      >
        Realizar Test
      </Link>
    )}
  </div>
);

export default Card;
