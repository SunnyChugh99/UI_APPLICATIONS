import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 1,
        tags: ['tag1','tag2','tag3']
        //imageUrl: 'https://picsum.photos/200/300'
    };

    
    // styles = {
    //     fontSize: '50px',
    //     fontWeight: 'bold'
    // }

    render() { 
                
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>

            <ui>

            {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}

            </ui>


        </div>
        )   
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){

        const {count} = this.state;
        return count === 0 ? "Zero" : count; 
    }
    



}
 
export default Counter;