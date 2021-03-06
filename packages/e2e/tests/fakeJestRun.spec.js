/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const {fakeJestRun} = require('./fakeJestRun');

it('should work', async function() {
  const result = await fakeJestRun([]);
  expect(result.numTotalTests).toBe(0);
  expect(result.wasInterrupted).toBe(false);
});

