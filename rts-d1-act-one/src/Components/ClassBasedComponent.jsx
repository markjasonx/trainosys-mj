import React from 'react';


class ClassBasedComponent extends React.Component {
    render () {
        return (
            <React.Fragment> 
            <div className='classBased'>
                This is Class Based Component
            </div>
            </React.Fragment>
        )
    }
}

export default ClassBasedComponent;