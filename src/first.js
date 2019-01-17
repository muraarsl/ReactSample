import React from 'react'

export class FirstComponent extends React.Component{
    render(){
    const veriler=this.props.myliste.map((element,index)=>(<li>
        {index + 1}.eleman={element}
    </li>))

        return (
            <div>İlk Component 1
                    <br></br>
            <ul>
                {veriler}
                </ul> 
            </div>
        );
    }
}
