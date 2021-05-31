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
// === Bitwise Operations ===
//

//
// Left Arithmetic Shift
// Left Logical Shift
//

function LeftShiftByte(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 8) + 8;
    } else if (Count >= 8) {
        Cnt = Count % 8;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return ((Value << Cnt) & 0xFF) - ((Value < 0) ? 256 : 0);
}

function LeftShiftInteger(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 16) + 16;
    } else if (Count >= 16) {
        Cnt = Count % 16;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return ((Value << Cnt) & 0xFFFF) - ((Value < 0) ? 65536 : 0);
}

function LeftShiftLong(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 32) + 32;
    } else if (Count >= 32) {
        Cnt = Count % 32;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp = Value << Cnt;
    if (Temp < 0) {
        return (Value < 0) ? Temp : Temp + 4294967296;
    } else {
        return (Value < 0) ? Temp - 4294967296 : Temp;
    }
}

//
// Right Arithmetic Shift
//

function RightArithmeticShiftByte(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 8) + 8;
    } else if (Count >= 8) {
        Cnt = Count % 8;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp;
    if ((Value & 0x80) == 0x80) {
        Temp = ((Value | 0xFFFFFF00) >> Cnt) & 0xFF;
    } else {
        Temp = (Value & 0xFF) >> Cnt;
    }
    
    return Temp - ((Value < 0) ? 256 : 0);
}

function RightArithmeticShiftInteger(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 16) + 16;
    } else if (Count >= 16) {
        Cnt = Count % 16;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp;
    if ((Value & 0x8000) == 0x8000) {
        Temp = ((Value | 0xFFFF0000) >> Cnt) & 0xFFFF;
    } else {
        Temp = (Value & 0xFFFF) >> Cnt;
    }
    
    return Temp - ((Value < 0) ? 65536 : 0);
}

function RightArithmeticShiftLong(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 32) + 32;
    } else if (Count >= 32) {
        Cnt = Count % 32;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp = Value >> Cnt;
    if (Temp < 0) {
        return (Value < 0) ? Temp : Temp + 4294967296;
    } else {
        return (Value < 0) ? Temp - 4294967296 : Temp;
    }
}

//
// Right Logical Shift
//

function RightShiftByte(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 8) + 8;
    } else if (Count >= 8) {
        Cnt = Count % 8;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return ((Value & 0xFF) >> Cnt) - ((Value < 0) ? 256 : 0);
}

function RightShiftInteger(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 16) + 16;
    } else if (Count >= 16) {
        Cnt = Count % 16;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return ((Value & 0xFFFF) >> Cnt) - ((Value < 0) ? 65536 : 0);
}

function RightShiftLong(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 32) + 32;
    } else if (Count >= 32) {
        Cnt = Count % 32;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp = Value >>> Cnt;
    if (Temp < 0) {
        return (Value < 0) ? Temp : Temp + 4294967296;
    } else {
        return (Value < 0) ? Temp - 4294967296 : Temp;
    }
}

//
// Left Circular Shift (Left Rotate)
//

function LeftRotateByte(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 8) + 8;
    } else if (Count >= 8) {
        Cnt = Count % 8;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return LeftShiftByte(Value, Cnt) | RightShiftByte(Value, 8 - Cnt);
}

function LeftRotateInteger(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 16) + 16;
    } else if (Count >= 16) {
        Cnt = Count % 16;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return LeftShiftInteger(Value, Cnt) | RightShiftInteger(Value, 16 - Cnt);
}

function LeftRotateLong(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 32) + 32;
    } else if (Count >= 32) {
        Cnt = Count % 32;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp = LeftShiftLong(Value, Cnt) | RightShiftLong(Value, 32 - Cnt);
    if (Temp < 0) {
        return (Value < 0) ? Temp : Temp + 4294967296;
    } else {
        return (Value < 0) ? Temp - 4294967296 : Temp;
    }
}

//
// Right Circular Shift (Right Rotate)
//

function RightRotateByte(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 8) + 8;
    } else if (Count >= 8) {
        Cnt = Count % 8;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return RightShiftByte(Value, Cnt) | LeftShiftByte(Value, 8 - Cnt);
}

function RightRotateInteger(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 16) + 16;
    } else if (Count >= 16) {
        Cnt = Count % 16;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    return RightShiftInteger(Value, Cnt) | LeftShiftInteger(Value, 16 - Cnt);
}

function RightRotateLong(Value, Count) {
    var Cnt;
    if (Count < 0) {
        Cnt = (Count % 32) + 32;
    } else if (Count >= 32) {
        Cnt = Count % 32;
    } else {
        Cnt = Count;
    }
    
    if (Cnt == 0) {
        return Value;
    }
    
    var Temp = RightShiftLong(Value, Cnt) | LeftShiftLong(Value, 32 - Cnt);
    if (Temp < 0) {
        return (Value < 0) ? Temp : Temp + 4294967296;
    } else {
        return (Value < 0) ? Temp - 4294967296 : Temp;
    }
}
