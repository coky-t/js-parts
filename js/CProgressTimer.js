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

function CProgressTimer() {
    this.m_StartTime = new Date();
};
CProgressTimer.prototype = {

reset: function() {
    this.m_StartTime = new Date();
},

show: function() {
    WScript.Echo(
        "Elapsed time: " + this.formatTimeDiff(this.m_StartTime, new Date()));
},

formatTimeDiff: function(StartTime, EndTime) {
    var SecondDiff;
    SecondDiff = Math.floor((EndTime.getTime() - StartTime.getTime()) / 1000);
    
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

}; // CProgressTimer.prototype
