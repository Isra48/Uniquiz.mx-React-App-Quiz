import React from 'react'
import logo from '../../Images/uniquizlogo.png'

class SelectArea extends React.Component{
    render(){
        return <div className="container">

        <div class="leftSide">
            <img src={logo} alt="Uniquiz Logo" class="tilt" />
        </div>

        <div class="rightSide">

            <h1>¡Prepárate!</h1>
            <h2>Instrucciones:</h2>

            <u1>
                <li>Selecciona tu área.</li>
                <li>Elige la cantidad de preguntas.</li>
                <li>Diviértete estudiando con nuestro banco de preguntas.</li>
                <li>Obtén tus resultados en cualquier momento.</li>
            </u1>

            <a href="questions.html" class="btn_2 banner_btn_1"> Area 1</a>

            <a href="questions.html" class="btn_2 banner_btn_1"> Area 2</a>

            <a href="questions.html" class="btn_2 banner_btn_1"> Area 3</a>

            <a href="questions.html" class="btn_2 banner_btn_1"> Area 4</a>
        </div>

        </div>
    }
}

export default SelectArea