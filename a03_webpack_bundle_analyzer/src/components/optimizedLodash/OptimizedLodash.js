import React from 'react';
import { times } from 'lodash';

const OptimizedLodash = () => {
  return <div className="optimized-uuid--cont">
    {

      times(3, () => console.log('whee'))

    }</div>;
};

export default OptimizedLodash;
