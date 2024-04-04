export const getPromedio = (mandamientos) =>{
    const suma = mandamientos.reduce((total, objeto) => total + objeto.nota, 0);
    const promedio = suma / mandamientos.length;
    const found = mandamientos.some(el=>!el.finished);

    return {
        promedio: promedio,
        finished:!found
    };
}

