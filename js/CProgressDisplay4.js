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

function CProgressDisplay4() {
    this.Counter = 0;
    this.CounterEnd = 100;
    
    this.IndicatorDoneSymbol = "*";
    this.IndicatorDoingSymbols = ["|", "/", "-", "\\"];
    this.IndicatorNotYetSymbol = " ";
    
    this.IndicatorEnd = 51;
    this.Ruler =
        "0%   10   20   30   40   50   60   70   80   90   100%\r\n" +
        "|----|----|----|----|----|----|----|----|----|----|";
    
    //this.IndicatorEnd = 52;
    //this.Ruler = "|0----------25-----------50----------75---------100|";
    
    this.bRulerAlready = false;
    
    this.Title = "";
    this.Comment = "";
    
    this.StartTime = new Date();
};
CProgressDisplay4.prototype = {
//var Counter;
//var CounterEnd;

//var IndicatorDoneSymbol;
//var IndicatorDoingSymbols;
//var IndicatorNotYetSymbol;
//var IndicatorEnd;

//var Ruler;
//var bRulerAlready;

//var Title;
//var Comment;

//var StartTime;

Increment: function() {
    this.Counter = this.Counter + 1;
    this.Display(this.GetIndicator(), this.GetTimes());
},

GetIndicator: function() {
    var Indicator = "";
    
    var IndicatorDoneCount;
    IndicatorDoneCount = 
        Math.floor((this.Counter * this.IndicatorEnd) / this.CounterEnd);
    
    for(var Index = 1; Index <= IndicatorDoneCount; Index++) {
        Indicator = Indicator + this.IndicatorDoneSymbol;
    }
    
    if(IndicatorDoneCount < this.IndicatorEnd) {
        var IndicatorDoingIndex;
        IndicatorDoingIndex = 
            this.Counter % this.IndicatorDoingSymbols.length;
        
        Indicator = 
            Indicator + this.IndicatorDoingSymbols[IndicatorDoingIndex];
    }
    
    for(var Index = IndicatorDoneCount + 2;
        Index <= this.IndicatorEnd; Index++) {
        Indicator = Indicator + this.IndicatorNotYetSymbol;
    }
    
    return Indicator;
},

GetTimes: function() {
    var EndTime;
    EndTime = new Date();
    
    var ElapsedSeconds;
    ElapsedSeconds =
        Math.floor((EndTime.getTime() - this.StartTime.getTime()) / 1000);
    
    if (ElapsedSeconds == 0) {
        return "";
    }
    
    var Times;
    //Times = " Elapsed time: " + this.formatTime(ElapsedSeconds);
    Times = "                    ";
    
    if (this.Counter < this.CounterEnd) {
        var RemainingSeconds;
        RemainingSeconds =
            Math.floor(ElapsedSeconds * (this.CounterEnd - this.Counter) / this.Counter);
        
        //Times = Times +
        //    " Estimated time remaining: " + FormatTime(RemainingSeconds);
        Times = " Remaining: " + this.formatTime(RemainingSeconds);
    }
    
    return Times;
},

Display: function(Indicator, Times) {
    if (! this.bRulerAlready) {
        WScript.StdOut.WriteLine(this.Ruler);
        this.bRulerAlready = true;
    }
    WScript.StdOut.Write(
        this.Title + Indicator + this.Comment + Times + "\r");
},

formatTime: function(Seconds) {
    var SecondDiff;
    SecondDiff = Seconds;
    
    var MinuteDiff;
    MinuteDiff = Math.floor(SecondDiff / 60);
    SecondDiff = SecondDiff % 60;
    
    var HourDiff;
    HourDiff = Math.floor(MinuteDiff / 60);
    MinuteDiff = MinuteDiff % 60;
    
    var TimeDiffString;
    TimeDiffString =
        this.right("0" + HourDiff, 2) + ":" +
        this.right("0" + MinuteDiff, 2) + ":" +
        this.right("0" + SecondDiff, 2)
    
    return TimeDiffString;
},

right: function(str, count) {
    return str.slice(-(count));
}

}; // CProgressDisplay.prototype
