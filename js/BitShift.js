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
    if (Count < 0) {
        return RightShiftByte(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 7) {
        return 0;
    }
    
    return ((Value << Count) & 0xFF) - ((Value < 0) ? 256 : 0);
}

function LeftShiftInteger(Value, Count) {
    if (Count < 0) {
        return RightShiftInteger(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 15) {
        return 0;
    }
    
    return ((Value << Count) & 0xFFFF) - ((Value < 0) ? 65536 : 0);
}

function LeftShiftLong(Value, Count) {
    if (Count < 0) {
        return RightShiftLong(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 31) {
        return 0;
    }
    
    return Value << Count;
}

//
// Right Arithmetic Shift - To Do
// Right Logical Shift
//

function RightShiftByte(Value, Count) {
    if (Count < 0) {
        return LeftShiftByte(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 7) {
        return 0;
    }
    
    return ((Value & 0xFF) >> Count) - ((Value < 0) ? 256 : 0);
}

function RightShiftInteger(Value, Count) {
    if (Count < 0) {
        return LeftShiftInteger(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 15) {
        return 0;
    }
    
    return ((Value & 0xFFFF) >> Count) - ((Value < 0) ? 65536 : 0);
}

function RightShiftLong(Value, Count) {
    if (Count < 0) {
        return LeftShiftInteger(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 31) {
        return 0;
    }
    
    return Value >>> Count;
}

//
// Left Circular Shift (Left Rotate)
//

function LeftRotateByte(Value, Count) {
    if (Count < 0) {
        return RightRotateByte(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 7) {
        return LeftRotateByte(Value, Count % 8);
    }
    
    return LeftShiftByte(Value, Count) | RightShiftByte(Value, 8 - Count);
}

function LeftRotateInteger(Value, Count) {
    if (Count < 0) {
        return RightRotateInteger(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 15) {
        return LeftRotateInteger(Value, Count % 16);
    }
    
    return LeftShiftInteger(Value, Count) | RightShiftInteger(Value, 16 - Count);
}

function LeftRotateLong(Value, Count) {
    if (Count < 0) {
        return RightRotateLong(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 31) {
        return LeftRotateLong(Value, Count % 32);
    }
    
    return LeftShiftLong(Value, Count) | RightShiftLong(Value, 32 - Count);
}

//
// Right Circular Shift (Right Rotate)
//

function RightRotateByte(Value, Count) {
    if (Count < 0) {
        return LeftRotateByte(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 7) {
        return RightRotateByte(Value, Count % 8);
    }
    
    return RightShiftByte(Value, Count) | LeftShiftByte(Value, 8 - Count);
}

function RightRotateInteger(Value, Count) {
    if (Count < 0) {
        return LeftRotateInteger(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 15) {
        return RightRotateInteger(Value, Count % 16);
    }
    
    return RightShiftInteger(Value, Count) | LeftShiftInteger(Value, 16 - Count);
}

function RightRotateLong(Value, Count) {
    if (Count < 0) {
        return LeftRotateLong(Value, Math.abs(Count));
    } else if (Count == 0) {
        return Value;
    } else if (Count > 31) {
        return RightRotateLong(Value, Count % 32);
    }
    
    return RightShiftLong(Value, Count) | LeftShiftLong(Value, 32 - Count);
}
