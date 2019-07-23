import React, {Component} from 'react';
import Cell from '../Cell/Cell.component';
import './GameGrid.css'

class GameGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            cells : [[0,-1,3],[5,8,4],[6,7,2]],
            emptyCellX: 0,
            emptyCellY: 1,
        }
    };

    checkAdjacency(i,j){
        const {emptyCellX, emptyCellY} = this.state;
        if((emptyCellX === i+1 && emptyCellY===j) 
            || (emptyCellX === i-1 && emptyCellY===j)
            || (emptyCellY === j+1 && emptyCellX===i)
            || (emptyCellY === j-1 && emptyCellX===i)) return true;
        else return false;
    }

    renderCells(cells){
        const gridSize = cells.length;
        let cellContainer=[];
        for(var i=0;i<gridSize;i++){
            const cellRow = cells[i];
            console.log(cellRow);
            for(var j=0;j<cellRow.length;j++){
                cellContainer.push(<Cell number={cellRow[j]} adjacent={this.checkAdjacency(i,j)}/>); 
            }
        }
        return cellContainer;
    }

    render(){
        // console.log(this.state);
        const {cells} = this.state;
        return(
            <div className="grid-container">
                {this.renderCells(cells)}
            </div>
        );
    }
}

export default GameGrid;