import React from 'react';
import { v4 } from "uuid";

const OptimizedUuid = () => {

    return (
        <div className="optimized-uuid--cont">
            {
                v4()
            }
        </div>
    )


}

export default OptimizedUuid;