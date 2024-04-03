import Mandamientos from "../Mandamientos";
import Formulario from "../DatosUsuario";
import { useSelector } from "react-redux";
const Questions = () =>{
    const user = useSelector(state=>state.user.userInfo);
    if(user){
        return <Mandamientos />
    }


    return <Formulario />;
}

export default Questions;