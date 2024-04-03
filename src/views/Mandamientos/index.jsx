import { useSelector } from "react-redux";
import Card from "./components/Card";
const Mandamientos = ({user}) => {
    const mandamientos = useSelector((state)=>state.questions.mandamientos)
    return(<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            mandamientos.map(element =>         <Card key={element.id} mandamiento={element}/>
            )
        }
    </div>);
}

export default Mandamientos;