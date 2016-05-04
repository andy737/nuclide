'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {GadgetsService} from '../../nuclide-gadgets';

export function consumeGadgetsService(api: GadgetsService): IDisposable {
  const Inspector = require('./ui/Inspector');
  return api.registerGadget(Inspector);
}