
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  let persons =[
    {
      name:"jobin",
      image:"https://cdn3.iconfinder.com/data/icons/game-competition-outline/64/15_Top_Player_game_competition-512.png",
      age:20
    },
    {
     name:"jo",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVQcsHHDnRkpjmvRiYsIVoeKAtUJxSMUy-OVYy17-CTARBK5v26a5eGUwPBNLWlWACxc&usqp=CAU",
      age:20
    },
    {
     name:"jobi",
      image:"https://i.pinimg.com/236x/24/66/a7/2466a7ebc3ad2087a8e2bc02cee2d24f.jpg",
      age:20
    },
     {
     name:"jobi",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qmzNWwhUEieigOOWlzmuON2F8Dt_FS3QnQ&s",
      age:20
    },
     {
     name:"jobi",
      image:"https://i.pinimg.com/236x/39/34/dc/3934dc4775ecb4dba8742fcbd939ca99.jpg",
      age:20
    }
  ]

  return (
    <div>
      <ProfileCard persons={persons}/>

    </div>
  )
}

export default App
