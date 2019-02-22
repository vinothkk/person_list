import React from 'react';
import './App.css';

const App = ()=>(<PersonList />)

const PersonList = () =>{

  const people = [
    {
      img:22, name:"Vinoth", Job:"Google CEO"
    },
    {
      img:55, name:"Aravind", Job:"Yahoo CEO"
    },
    {
      img:75, name:"Raj Kumar", Job:"Dell CEO"
    }
  ]
  return(
    <section>
       <Person person = {people[0]}/>;
       <Person person = {people[1]}>
        He is CEO of Yahoo and he made lot of changes to Yahoo company.
        He offering jobs like average student and make him/her to better feature grouth
       </Person>;
       <Person person = {people[2]}/>;
    </section>
  );
} 

const Person = (props) =>{

  const { img, name, Job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return( 
    <div className="person">
      <img src={url} alt=""/>
        <div>
          <h4>{name}</h4>
          <h4>{Job}</h4>
          {children}
        </div>
    </div>
  );
}


export default App;
