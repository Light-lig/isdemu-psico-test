import { useSelector } from "react-redux";
import Card from "./components/Card";
import { getPromedio } from "../../utils/utils";
const Mandamientos = ({ user }) => {
  const mandamientos = useSelector((state) => state.questions.mandamientos);
  const promedio = getPromedio(mandamientos);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <div className="col-span-2">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">AREA FUNCIONAL:</p>
              <p className="font-bold">PUESTO DE TRABAJO:</p>
              <p className="font-bold">UNIDAD RESPONSABLE:</p>
            </div>
            <div>
              <p className="text-gray-700">{user.areaFuncional}</p>
              <p className="text-gray-700">{user.puestoTrabajo}</p>
              <p className="text-gray-700">{user.unidadResponsable}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="font-bold">CÓDIGO:</p>
              <p className="font-bold">CÓDIGO:</p>
              <p className="font-bold">CÓDIGO:</p>
            </div>
            <div>
              <p className="text-gray-700">{user.codigoArea}</p>
              <p className="text-gray-700">{user.codigoPuesto}</p>
              <p className="text-gray-700">{user.codigoUnidad}</p>
            </div>
          </div>
        </div>
        {promedio.finished && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="mt-4 text-center">
              <p className="text-4xl font-bold text-purple-500 animate-bounce">
                {promedio.promedio}
              </p>
              <p className="text-lg font-bold text-gray-700">PROMEDIO</p>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mandamientos.map((element) => (
            <Card key={element.id} mandamiento={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mandamientos;
