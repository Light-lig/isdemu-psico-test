import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
const Formulario = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset ,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(add(data))
    reset()
  };

  return (
    <div className="max-w-xl mx-auto">
          <p className="mb-8">
            Debes completar el formulario para realizar los test.
    </p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4">
          <label
            htmlFor="areaFuncional"
            className="mr-2 text-sm font-medium text-gray-700"
          >
            AREA FUNCIONAL:
          </label>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("areaFuncional", { required: true })}
            />
            {errors.areaFuncional && <span>Este campo es requerido</span>}
          </div>
          <div>
            <input
              type="number"
              {...register("codigoArea", {
                required: true,
                placeholder: "Código",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.codigoArea && <span>Este campo es requerido</span>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label
            htmlFor="puestoTrabajo"
            className="mr-2 text-sm font-medium text-gray-700"
          >
            PUESTO DE TRABAJO:
          </label>
          <div>
            <div>
              <input
                type="text"
                {...register("puestoTrabajo", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.puestoTrabajo && <span>Este campo es requerido</span>}
            </div>
          </div>

          <div>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Código"
              {...register("codigoPuesto", {
                required: true,
                placeholder: "Código",
              })}
            />
            {errors.codigoPuesto && (
              <span>Este campo es requerido</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <label
            htmlFor="unidadResponsable"
            className="mr-2 text-sm font-medium text-gray-700"
          >
            UNIDAD RESPONSABLE:
          </label>
          <div>
            <input
              type="text"
              {...register("unidadResponsable", {
                required: true,
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.unidadResponsable && <span>Este campo es requerido</span>}
          </div>

          <div>
            <input
              type="number"
              {...register("codigoUnidad", {
                required: true,
                placeholder: "Código",
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.codigoUnidad && <span>Este campo es requerido</span>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
