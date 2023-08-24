import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
         data:   
         [  
            {             
               "name":"Abhishek"             
            },  
            {            
               "name":"Saharsh"             
            },  
            {    
               "name":"Ajay"          
            }  
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}  
class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Student Name Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.data.name}</li>   
         </ul>  
      );  
   }  
}  
class Apps extends React.Component {  
  render() {  
     return (  
        <div>  
           <First/>  
           <Second/>  
        </div>  
     );  
  }  
}  
class First extends React.Component {  
  render() {  
     return (  
        <div>  
           <h1>React</h1>  
        </div>  
     );  
  }  
}  
class Second extends React.Component {  
  render() {  
     return (  
        <div>  
           <h2>www.google.com</h2>  
           <p>This is search engine.</p>  
        </div>  
     );  
  }  
}  
export default App; 