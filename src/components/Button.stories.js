/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


const props = {
  regular: () => ({
    className: 'some-class',
    onClick: action('onClick'),
    onHover: action('onHover'),
  })
};

storiesOf('Buttons', module)
  .add(
    'Default',
    () => {
      const regularProps = props.regular();
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button {...regularProps} className="some-class">
            Button
          </Button>
        </div>
      );
    }
  );
