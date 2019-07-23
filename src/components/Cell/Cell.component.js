import React, {Component} from 'react';
import './Cell.css'

class Cell extends Component {
    constructor(props){
        super(props);
        // this.handleCellClick = this.handleCellClick.bind(this);
        this.state={
            value: -1,
        };
    }

    componentDidMount(){
        this.setState({
            value: this.props.number
        })
    }

    displayCell(number){
        if(number === -1){
            return(
                <div className="grid-item black">
                    {number}
                </div>
            )
        }else {
        return(
            <div className="grid-item" onClick={() => this.props.handleCellClick(this.props.adjacent, this.props.number, this.props.position)}>
                <span>{number}</span>
            </div>
        )}
    }

    render(){
        const {number} = this.props;
        return this.displayCell(number);
    }
}

export default Cell;