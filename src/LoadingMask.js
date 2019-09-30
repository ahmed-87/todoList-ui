import React from 'react';
import { Dimmer, Loader} from'semantic-ui-react';

const LoadingMask = (props) => {
    const {isLoading, message} = props;
    let content = null;
 
    if(isLoading && isLoading === true){
        content = (
            <Dimmer active>
                <Loader>{message}</Loader>
            </Dimmer>
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}


export default LoadingMask;