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
// Microsoft XML, vX.X
// - MSXML2.XMLHTTP
//

//
// === HttpRequest ===
//

//
// HttpGet
// - Sends an HTTP GET request to the server and receives a response.
//
// HttpPost
// - Sends an HTTP POST request to the server and receives a response.
//

//
// Url:
//   Required. The requested URL. This can be either
//   an absolute URL, such as "http://Myserver/Mypath/Myfile.asp",
//   or a relative URL, such as "../MyPath/MyFile.asp".
//
// Body:
//   Optional. The body of the message being sent with the request.
//

function HttpGet(Url, Body) {
    return OpenAndSendAndResponseText("GET", Url, Body);
}

function HttpPost(Url, Body) {
    return OpenAndSendAndResponseText("POST", Url, Body);
}

//
// --- HttpRequest ---
//

//
// OpenAndSendAndResponseText
// - Sends an HTTP request to the server and receives a response.
//

//
// Method:
//   Required. The HTTP method used to open the connection,
//   such as GET, POST, PUT, or PROPFIND. For XMLHTTP,
//   this parameter is not case-sensitive.
//   The verbs TRACE and TRACK are not allowed
//   when IXMLHTTPRequest is hosted in the browser.
//
// Url:
//   Required. The requested URL. This can be either
//   an absolute URL, such as "http://Myserver/Mypath/Myfile.asp",
//   or a relative URL, such as "../MyPath/MyFile.asp".
//
// Body:
//   Optional. The body of the message being sent with the request.
//

function OpenAndSendAndResponseText(
    Method,
    Url,
    Body) {
    
    try {
        with (new ActiveXObject("MSXML2.XMLHTTP")) {
            Open(Method, Url, false);
            Send(Body);
            if (Status == 200) {
                return responseText;
            } else {
                return "";
            }
        }
    } catch (e) {
        return "";
    }
}

//
// --- Test ---
//

function Test_HttpGet(Url) {
    if (Url == "") { return; }
    
    var Text;
    Text = HttpGet(Url, "");
    Debug_Print(Text);
}

function Test_HttpPost(Url, Body) {
    if (Url == "") { return; }
    if (Body == "") { return; }
    
    var Text;
    Text = HttpPost(Url, Body);
    Debug_Print(Text);
}

function Debug_Print(Str) {
    WScript.Echo(Str);
}
