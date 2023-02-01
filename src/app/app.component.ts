import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';

  winMessage = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty')
  }

  checkIsWinner = () => {
    //Horizontal Checks
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`
    }
    else if (
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5] &&
      this.itemArray[3] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} won`
    }
    else if (
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8] &&
      this.itemArray[6] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`
    }
    // Vertical Checks
    else if (
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`
    }
    else if (
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[4] &&
      this.itemArray[7] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[7]} won`
    }
    else if (
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8] &&
      this.itemArray[8] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won`
    }
    //Diagnal Checks
    else if (
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`
    }
    else if (
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`
    }


  }

  constructor(private toastr: ToastrService) { }

}
