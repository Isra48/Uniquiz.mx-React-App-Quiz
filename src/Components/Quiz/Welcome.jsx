import React from 'react'
import SelectArea from './SelectArea'
import SelectQuestions from './SelectQuestions'
import './Welcome.css'

class Welcome extends React.Component {
    render(){
        return <div className="main-welcome">
            {/* <SelectArea></SelectArea> */}
            <SelectQuestions></SelectQuestions>
        </div> 
        
    }
}

export default Welcome