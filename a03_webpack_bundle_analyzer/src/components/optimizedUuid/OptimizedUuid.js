import React from 'react';
import * as uuid from 'uuid';
// import { v4 } from 'uuid';

const OptimizedUuid = () => {
  return <div className="optimized-uuid--cont">{uuid.v4()}</div>;
};

export default OptimizedUuid;
