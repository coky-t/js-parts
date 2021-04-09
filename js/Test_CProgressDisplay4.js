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

//
// --- Test ---
//

function Test_CProgressDisplay1() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 1000;
    
    for(var Index = 1; Index <= 1000; Index++) {
        PDisp.Increment();
        WScript.Sleep(1);
    }
}

function Test_CProgressDisplay2() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 1000;
    PDisp.IndicatorDoingSymbols = ["-", "+", "*"];
    
    for(var Index = 1; Index <= 1000; Index++) {
        PDisp.Increment();
        WScript.Sleep(1);
    }
}

function Test_CProgressDisplay3() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 200;
    PDisp.IndicatorDoneSymbol = "+";
    PDisp.IndicatorDoingSymbols = ["-", "+", "*"];
    PDisp.IndicatorNotYetSymbol = "-";
    
    for(var Index = 1; Index <= 200; Index++) {
        PDisp.Increment();
        WScript.Sleep(100);
    }
}

function Test_CProgressDisplay4() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 100;
    PDisp.IndicatorDoneSymbol = "+";
    PDisp.IndicatorNotYetSymbol = "-";
    PDisp.IndicatorEnd = 52;
    PDisp.Ruler = "|0----------25-----------50----------75---------100|";
    
    for(var Index = 1; Index <= 100; Index++) {
        PDisp.Increment();
        WScript.Sleep(100);
    }
}

function Test_CProgressDisplay5() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 300;
    PDisp.IndicatorDoneSymbol = "#";
    PDisp.IndicatorDoingSymbols = ["-", "=", "#"];
    PDisp.IndicatorNotYetSymbol = "=";
    PDisp.IndicatorEnd = 52;
    PDisp.Ruler = "      |0----------25-----------50----------75---------100|";
    PDisp.Title = "Test: ";
    
    for(var Index = 1; Index <= 300; Index++) {
        PDisp.Increment();
        WScript.Sleep(10);
    }
}

function Test_CProgressDisplay6() {
    var PDisp;
    PDisp = new CProgressDisplay4();
    PDisp.CounterEnd = 300;
    PDisp.IndicatorDoneSymbol = "#";
    PDisp.IndicatorDoingSymbols = ["-", "=", "#"];
    PDisp.IndicatorNotYetSymbol = "=";
    PDisp.IndicatorEnd = 52;
    PDisp.Ruler = "      |0----------25-----------50----------75---------100|";
    PDisp.Title = "Test: ";
    
    for(var Index = 1; Index <= 300; Index++) {
        PDisp.Comment = " " + Index + "/300";
        PDisp.Increment();
        WScript.Sleep(100);
    }
}
