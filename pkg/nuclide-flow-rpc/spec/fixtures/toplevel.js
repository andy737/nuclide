'use babel';
/* @noflow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

function baz(arg: ?Type, a: any): RetType {
  foo();
  return {};
}

function foo({bar, y}, [b]): void {
  baz();
}

const funExpr1 = function(param1: string): void {
  funExpr2(true, null);
};

const funExpr2 = (arg1: boolean, arg2: any) => {
  return funExpr1('');
};

/* eslint-disable */
const varFoo = '';

var varBar = '';

let varBaz = {
  foo(): any {
    const shouldNotShowUp = '';
    return shouldNotShowUp;
  },
};
/* eslint-enable */
