import React from 'react'

function ProfileCard({persons}) {
  return (
    <div className="profiles-container">
        {persons.map((person) => (
            <div className="profile-card">
                <img src={person.image}className="profile-image" />
                <h1>{person.name}</h1>
                <p>{person.age}</p>
            </div>
        ))}
        </div>
  )
}

export default ProfileCard