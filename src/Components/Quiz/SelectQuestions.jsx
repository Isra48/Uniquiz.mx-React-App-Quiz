import React from 'react'
import logo from '../../Images/uniquizlogo.png'

class SelectQuestions extends React.Component{
    render(){
        return <>
        <div class="exit_popup-sec">
            <div class="exit_popup-content">
                <h2 data-edit="text">
                    #Quizate!</h2>

                <h3 data-edit="text">¡Selecciona tus preguntas!</h3>
                <form className="formul" name="formul">
                    <select className="custom-select" style={{width: '400px'}} name="selection">
                        <option value="0">¿Cuántas Joven?</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                        <option value="120">120</option>
                      </select>
                </form>
                <button class="siguiente_botton">
                    Continuar
                </button>
                <button class="booknow-popup-clsbtn close-btn close-btn">X</button>
            </div>
        </div>
        </>
    }
}

export default SelectQuestions