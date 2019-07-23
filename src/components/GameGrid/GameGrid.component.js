import React, {Component} from 'react';
import Cell from '../Cell/Cell.component';
import './GameGrid.css'

class GameGrid extends Component {
    constructor(props){
        super(props);
        this.swapCells = this.swapCells.bind(this);
        this.checkAdjacency = this.checkAdjacency.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
        this.state = {
            cells : [[0,-1,3],[5,8,4],[6,7,2]],
            emptyCellX: 0,
            emptyCellY: 1,
        }
    };

    swapCells(emptyX, emptyY, position, number){
        const {cells} = this.state;
        cells[emptyX][emptyY] = number;
        const {i,j} = position;
        cells[i][j]=-1;
        console.log(cells);
        this.setState({
            cells,
            emptyCellX: i,
            emptyCellY: j
        })
    }

    checkAdjacency(i,j){
        const {emptyCellX, emptyCellY} = this.state;
        if((emptyCellX === i+1 && emptyCellY===j) 
            || (emptyCellX === i-1 && emptyCellY===j)
            || (emptyCellY === j+1 && emptyCellX===i)
            || (emptyCellY === j-1 && emptyCellX===i)) return true;
        else return false;
    }

    handleCellClick(adjacent, number, position){
        const {emptyCellX, emptyCellY} = this.state;
        if(adjacent){
            console.log(true, number, position, this.state.cells);
            this.swapCells(emptyCellX,emptyCellY,position, number);
        }
        else{
            console.log(false, number, position);
        }
    }

    renderCells(cells){
        const gridSize = cells.length;
        let cellContainer=[];
        for(var i=0;i<gridSize;i++){
            const cellRow = cells[i];
            console.log(cellRow);
            for(var j=0;j<cellRow.length;j++){
                cellContainer.push(<Cell number={cellRow[j]} position={{i,j}}adjacent={this.checkAdjacency(i,j)} handleCellClick={this.handleCellClick}/>); 
            }
        }
        return cellContainer;
    }

    render(){
        const {cells} = this.state;
        return(
            <div className="grid-container">
                {this.renderCells(cells)}
            </div>
        );
    }
}

export default GameGrid;