//
// Copyright (c) 2021 Koki Takeyama
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//

function CProgressDisplay() {
    this.Counter = 0;
    this.CounterEnd = 100;
    
    this.IndicatorDoneSymbol = "###";
    this.IndicatorNotYetSymbol = "___";
    this.IndicatorEnd = 10;
    
    this.Title = "";
    this.Comment = "";
};
CProgressDisplay.prototype = {
//var Counter;
//var CounterEnd;

//var IndicatorDoneSymbol;
//var IndicatorNotYetSymbol;
//var IndicatorEnd;

//var Title;
//var Comment;

Increment: function() {
    this.Counter = this.Counter + 1;
    this.Display(this.GetIndicator(), this.GetPercent());
},

GetIndicator: function() {
    var Indicator = "";
    
    var IndicatorDoneCount;
    IndicatorDoneCount = 
        Math.floor((this.Counter * this.IndicatorEnd) / this.CounterEnd);
    
    for(var Index = 1; Index <= IndicatorDoneCount; Index++) {
        Indicator = Indicator + this.IndicatorDoneSymbol;
    }
    for(var Index = IndicatorDoneCount + 1;
        Index <= this.IndicatorEnd; Index++) {
        Indicator = Indicator + this.IndicatorNotYetSymbol;
    }
    
    return Indicator;
},

GetPercent: function() {
    return " " + 
        (Math.floor((this.Counter * 100) / this.CounterEnd)).toString() + "%";
},

Display: function(Indicator, Percent) {
    var Control = "\r";
    if (this.Counter >= this.CounterEnd) { Control = "\r\n"; }
    WScript.StdOut.Write(
        this.Title + Indicator + Percent + this.Comment + Control);
}

}; // CProgressDisplay.prototype
