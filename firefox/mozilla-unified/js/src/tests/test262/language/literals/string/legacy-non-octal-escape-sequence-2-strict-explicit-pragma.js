// |reftest| error:SyntaxError
// Copyright (C) 2020 Rick Waldron Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-additional-syntax-string-literals
description: >
  String Literals extensions disallowed in strict mode; ZeroToThree 2
info: |
  It is possible for string literals to precede a Use Strict Directive that places the enclosing
  code in strict mode, and implementations must take care to not use this extended definition of
  EscapeSequence with such literals. For example, attempting to parse the following source text
  must fail.

  Strict mode is entered via the explicit Use Strict Directive.

  ZeroToThree::one of
    0 1 2 3

flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function invalid() { "\2"; "use strict"; }
