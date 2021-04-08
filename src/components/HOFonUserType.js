import React, { Component } from 'react';
import Table from './Table';

class HOFonUserType extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType : "",
            // name : "",
        };
    }
    changeHandler = (event) =>{
        this.setState(
            {
                userType: event.target.value,
            },
            () => {
                console.log(this.state.userType);
            }
        );
    };
    render() {
        const {data} =this.props;
        console.log({data});
        // filtered data bsed on usertype
        let filteredData = data.filter((userObj) => {
            console.log(userObj.user_type,this.state.userType);
            if(userObj.user_type==this.state.userType) return true;
        });
        // filtered data bsed on letter start with J
        let filteredDataWithJ = data.filter((userObj) => {
            console.log(userObj.name,this.state.name);
            if(userObj.name.startsWith("J")) return true;
        });

          // filtered all data based on age greater than 28 and age less than or equal to 50
          let filteredDataWithAge = data.filter((userObj) => {
            if(userObj.age > 28 && userObj.age<=50) return true;
        });

        return (
            <div>
                {/* // filtered data bsed on usertype */}
                <select value={this.state.userType} onChange={this.changeHandler}>
                    <option value="">Select userType</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Entreprenuer">Entreprenuer</option>
                </select>
                <Table userData ={filteredData}></Table>
                
                <div>
                       <h2>Filter all data startingwith the letter J </h2>
                        <Table userData={filteredDataWithJ}></Table>
                </div>
                <div>
                       <h2>Filter data based on age </h2>
                        <Table userData={filteredDataWithAge}></Table>
                </div>
            </div>
        );
    }
}
export default HOFonUserType;