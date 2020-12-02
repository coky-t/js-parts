//
// Copyright (c) 2020 Koki Takeyama
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

function Test_GetMatchingLines_Apache20() {
    Test_GetMatchingLines_Core(
"Copyright <<var;name=\"copyright\";original=\"[yyyy] [name of copyright owner]\";match=\".+\">>\n\n" +
"Licensed under the Apache License, Version 2.0 (the \"License\"); \n\n" +
"you may not use this file except in compliance with the License. \n\n" +
"You may obtain a copy of the License at \n\n" +
"http://www.apache.org/licenses/LICENSE-2.0 \n\n" +
"Unless required by applicable law or agreed to in writing, software \n\n" +
"distributed under the License is distributed on an \"AS IS\" BASIS, \n\n" +
"WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. \n\n" +
"See the License for the specific language governing permissions and \n\n" +
"limitations under the License.");
}

function Test_GetMatchingLines_MIT() {
    Test_GetMatchingLines_Core(
"<<beginOptional>> MIT License<<endOptional>> " +
"<<var;name=\"copyright\";original=\"Copyright (c) <year> <copyright holders>\";match=\".{0,1000}\">>\n\n" +
"Permission is hereby granted, free of charge, to any person obtaining a copy " +
"of <<var;name=\"software\";original=\"this software and associated documentation files\";match=\"this software and associated documentation files|this source file\">> (the \"Software\"), to deal " +
"in the Software without restriction, including without limitation the rights " +
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell " +
"copies of the Software, and to permit persons to whom the Software is furnished " +
"to do so, subject to the following conditions: \n\n" +
"The above copyright notice and this permission notice<<beginOptional>> (including the next paragraph)<<endOptional>>" +
" shall be included in all copies or substantial portions of the " +
"Software. \n\n" +
"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR " +
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS " +
"FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL <<var;name=\"copyrightHolder\";original=\"THE AUTHORS OR COPYRIGHT HOLDERS\";match=\".+\">>" +
" BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, " +
"WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF " +
"OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.");
}

//
// --- Test Core ---
//

function Test_GetMatchingLines_Core(Text) {
    var MatchingLines;
    MatchingLines = GetMatchingLines(Text);
    
    Debug_Print("--- Text ---");
    Debug_Print(Text);
    Debug_Print("--- MatchingLines ---");
    Debug_Print(MatchingLines);
}
