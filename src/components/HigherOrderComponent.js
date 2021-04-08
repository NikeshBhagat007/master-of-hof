import React, { Component } from 'react';
import Table from "./Table"
import HOFonUserType from "./HOFonUserType"
class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state ={
            userData :[
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        };
    }
    render() {
        let userData =this.state.userData; 
        console.log(userData);
        return (
            <React.Fragment>
                <h2>Display All items</h2>
                <Table userData={userData}></Table>
                <h2>Display based on user type</h2>
                <HOFonUserType data ={this.state.userData}></HOFonUserType>
            </React.Fragment>
        );
    }
}

export default HigherOrderComponent;