import React from 'react';

const list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export default class MemberHeader extends React.Component {

    state = {
        currentGroup: 1,
        text: ''
    };

    onChange = (e) => {

        this.setState({currentGroup: e.target.value, text: e.target.value});
    };



    render() {

        const startIndex = this.state.currentGroup * 3;
        const arr = list.slice(startIndex, startIndex + 3);

        return(
            <div>
                <input value={this.state.text} onChange={this.onChange} type="text"/>
                {arr.map((member, i) => {
                    return (
                        <h1 key={i}>
                            {member}
                        </h1>
                    )
                })}
            </div>
        )
    }
}
