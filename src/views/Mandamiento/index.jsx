import React from "react";
import { useSelector } from "react-redux";
import { useParams ,useNavigate
} from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {edit} from '../../slices/questionsSlice';

const Mandamiento = () => {
  const { id } = useParams();
  const mandamientos = useSelector((state) => state.questions.mandamientos);
  const formulario = mandamientos.find((el) => el.id === parseInt(id));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset ,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  // const navigate = useNavigate();
  const onSubmit = (data) => {
    let form = {};
    let notaFinal = 0;
    Object.entries(data).forEach(([key, value]) => {
       notaFinal += parseInt(value);
    })
    form.id = id;
    form.nota = notaFinal;
    form.finished = true;

    dispatch(edit(form))
    reset()
    navigate("/mandamientos")
  };

  // Verificar si el formulario existe antes de renderizar
  if (!formulario) {
    return <div>No se encontró el mandamiento con el ID especificado</div>;
  }

  return (
<div>
<div className="container mx-auto max-w-7xl p-8 bg-white">
<Link to="/mandamientos" >
          <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Volver</button>

        </Link>
      <h2 className="text-2xl font-semibold mb-4">{formulario.titulo}</h2>
      <p className="text-lg font-medium mb-4">OBJETIVO</p>
      <p className="text-gray-700 mb-4">{formulario.objetivo}</p>
      <p className="text-gray-700 mb-4">INDICACIONES: UNA VEZ VERIFICADO EL APARTADO DE "INICIO" CONTESTAR LO SIGUIENTE DE UNA MANERA HONESTA</p>
    </div>								
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white shadow-md p-4 rounded-lg mt-4 mb-4">
        {formulario.preguntas.map((pregunta, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{`${index + 1}. ${pregunta.pregunta}`}</p>
            <div className="mt-2">
              {pregunta.opciones.map((opcion, opcionIndex) => (
                <label key={opcionIndex} className="block mb-2">
                  <input
                    type="radio"
                    name={`pregunta${index + 1}`}
                    value={opcion.valor}
                    className="mr-2"
                    {...register(`pregunta${index + 1}`, { required: true })}
                  />
                  {opcion.nombre}
                </label>
              ))}
                 {errors[`pregunta${index + 1}`] && (
                <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">Enviar</button>
    </form>
</div>
    
  );
};

export default Mandamiento;
