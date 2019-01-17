import React from 'react'

export class FirstComponent extends React.Component{
    render(){
        return (
            <div>İlk Component 1
                    <br></br>
                    {this.props.ilkprobs}
            </div>
        );
    }
}
