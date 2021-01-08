import React from 'react'

function Skills (props) {
  return (
    <div className="container">
      <h1 id="title">Skills</h1>
      <img src="https://i.imgur.com/BbI96rF.png" className="img-fluid" id="skillspic" alt="always learning"></img><br/>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <b>Languages</b> <br/>JavaScript, Python, SQL, HTML, CSS <br/>
        <b>Frameworks</b> <br/>React, Django, Express <br/>
        <b>Libraries</b> <br/>Bootstrap, React-Bootstrap, Mongoose<br/>
        <b>Databases</b> <br/>NoSQL (MongoDB), SQL<br/>
        <b>API</b> <br/>Heroku<br/>
        <b>Runtime</b> <br/>Node.js<br/>
        <b>Documentation</b> <br/>Wireframes, Entity Relationship Diagrams, User Stories, ReadMe<br/>
      </div>
    </div>
  )
}

export default Skills
