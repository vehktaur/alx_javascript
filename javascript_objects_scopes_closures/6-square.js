#!/usr/bin/node

const OldSquare = require('./5-square');

class Square extends OldSquare {
  charPrint(c) {
    if (c) {
      for (let h = 0; h < this.height; h++) {
        let row = '';
        for (let w = 0; w < this.width; w++) {
          row += c;
        }
        console.log(row);
      }
    } else {
      this.print();
    }
  }
}

module.exports = Square;
