'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export type Location = {
  line: number,
  column: number,
};

export type Reference = {
  uri: string,      // Nuclide URI of the file path
  name: ?string,    // name of calling method/function/symbol
  start: Location,
  end: Location,
};

export type ReferenceGroup = {
  references: Array<Reference>,
  // Start and end range of the preview text.
  startLine: number,
  endLine: number,
};

export type FileReferences = {
  uri: string,
  grammar: Object /* atom$Grammar */,
  previewText: Array<string>,
  refGroups: Array<ReferenceGroup>,
};
