import Contador from "./exemplos/Contador.jsx";
import Saudacao from "./exemplos/Saudacao.jsx";
import "./teoria.css"

function AppTeoria()
{
    return(
        <div>
            <Saudacao nome="Leone"/>
            <Contador/>
        </div>
    );
}

export default AppTeoria;