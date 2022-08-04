import React, { Component } from 'react'

const withSomething = (MyComponent: React.ComponentType) => {
    class WithSomething extends Component {
      render() {
        return (
            <>
                <MyComponent />
            </>
        )
      }
    }

    return WithSomething
}

export default withSomething