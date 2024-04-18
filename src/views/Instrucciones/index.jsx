export const Instrucciones = () => (
  <div className="container mx-auto max-w-7xl">
    <h2 className="text-2xl font-bold mb-4">OBJETIVO:</h2>
    <p className="mb-8">
      Evaluar las competencias individuales de cada integrante de la
      organización con el fin de determinar de una manera cuantitativa con la
      escala de evaluación, para saber sus competencias y habilidades que
      desarrollan para su cargo respectivo.
    </p>

    <h2 className="text-2xl font-bold mb-4">
      INSTRUCCIONES PARA EL DESARROLLO DE LA AUTOEVALUACION
    </h2>
    <ol className="list-decimal pl-4 mb-8">
      <li className="mb-2">Sé sincero o sincera a la hora de autoevaluarte</li>
      <li className="mb-2">Lee bien las frases</li>
      <li className="mb-2">
        Hay una escala de calificación que es la siguiente:
      </li>
    </ol>

    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">CUALITATIVO</th>
          <th className="border border-gray-300 px-4 py-2">CUANTITATIVO</th>
          <th className="border border-gray-300 px-4 py-2">CUALITATIVO</th>
          <th className="border border-gray-300 px-4 py-2">CUANTITATIVO</th>
          <th className="border border-gray-300 px-4 py-2">CUALITATIVO</th>
          <th className="border border-gray-300 px-4 py-2">CUANTITATIVO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">EXCELENTE</td>
          <td className="border border-gray-300 px-4 py-2">5</td>
          <td className="border border-gray-300 px-4 py-2">
            TOTALMENTE DE ACUERDO
          </td>
          <td className="border border-gray-300 px-4 py-2">5</td>
          <td className="border border-gray-300 px-4 py-2">
            MUY FRECUENTEMENTE
          </td>
          <td className="border border-gray-300 px-4 py-2">5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">MUY BUENO</td>
          <td className="border border-gray-300 px-4 py-2">4</td>
          <td className="border border-gray-300 px-4 py-2">DE ACUERDO</td>
          <td className="border border-gray-300 px-4 py-2">4</td>
          <td className="border border-gray-300 px-4 py-2">FRECUENTEMENTE</td>
          <td className="border border-gray-300 px-4 py-2">4</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">BUENO</td>
          <td className="border border-gray-300 px-4 py-2">3</td>
          <td className="border border-gray-300 px-4 py-2">INDECISO</td>
          <td className="border border-gray-300 px-4 py-2">3</td>
          <td className="border border-gray-300 px-4 py-2">OCACIONALMENTE</td>
          <td className="border border-gray-300 px-4 py-2">3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">REGULAR</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
          <td className="border border-gray-300 px-4 py-2">EN DESACUERDO</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
          <td className="border border-gray-300 px-4 py-2">RARAMENTE</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">DEFICIENTE</td>
          <td className="border border-gray-300 px-4 py-2">1</td>
          <td className="border border-gray-300 px-4 py-2">
            TOTALMENTE EN DESACUERDO
          </td>
          <td className="border border-gray-300 px-4 py-2">1</td>
          <td className="border border-gray-300 px-4 py-2">NUNCA</td>
          <td className="border border-gray-300 px-4 py-2">1</td>
        </tr>
      </tbody>
    </table>

    <ol start={
      4
    } className="list-decimal pl-4 mt-8" >
      <li className="mb-4">
        Se te dará una nota individual al final de cada instrumento de
        autoevaluación gerencial
      </li>

      <li className="mb-4">
        Los instrumentos con los que se te evaluará son los siguientes:
        <ul className="list-disc pl-6 mt-4">
          <li>
            Primer Instrumento: Autoevaluación gerencial orientada a la manera
            en la que se administra
          </li>
          <li>
            Segundo Instrumento: Autoevaluación gerencial orientada a la manera
            en la que se gerencia
          </li>
          <li>
            Tercer Instrumento: Autoevaluación gerencial orientada a la manera
            en la que se dirige
          </li>
          <li>
            Cuarto Instrumento: Autoevaluación gerencial orientada a la manera
            en la que se lidera
          </li>
          <li>
            Quinto Instrumento: Autoevaluación gerencial orientada a la manera
            en la que se gestiona
          </li>
        </ul>
      </li>
      <li className="mb-4">
        Al finalizar las 5 herramientas de autoevaluación gerencial, se te dará
        una nota promedio de las 5 herramientas
      </li>
      <li className="mb-4">
        En cada instrumento, el puntaje máximo que se puede alcanzar es 100
        puntos
      </li>
      <li className="mb-4">
        Por ende, los puntos totales, juntando los 5 instrumentos son 500 puntos
      </li>
      <li className="mb-4">
        Cada instrumento cuenta con un total de 20 frases, y por todos los
        instrumentos un total de 100 frases
      </li>
    </ol>
  </div>
);
