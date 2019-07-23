import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component {

    displayCell(number){
        if(number === -1){
            return(
                <div className="grid-item black">
                    <span>{number}</span>
                </div>
            )
        }else {
        return(

            <div className="grid-item">
                <span>{number}</span>
            </div>
        )}
    }

    render(){
        const {number} = this.props;
        return this.displayCell(number)

    }
}

export default Cell;