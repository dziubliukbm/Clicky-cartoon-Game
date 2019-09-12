import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import heros from '../pictures'
import CartoonCard from './Card/Card'

let checked = [];

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
class Game extends React.Component {

state = {
  started: false,
count: 0,
highest:0,
message: "Click on image to start game  ",
shake: false,
}


handleCount = id => {
   if(!checked.includes(id)){
    checked.push(id) 
    
  this.setState({
    started: true,
    count: this.state.count + 1,
    message: "Right choice",
    shake: false
  });

  if(this.state.count >= this.state.highest){
      this.setState({
          highest: this.state.count + 1
      })
  }
} else {
    this.setState({
        count: 0,
        message: "Nope!",
        shake: true,
      });
      
      checked = [];

}
}

render () {
  return (
  <>
   <Navbar
    started={this.state.started}
    message={this.state.message}
    count={this.state.count}
    highest={this.state.highest}
   />
  <Header/>
  <main className="container">
  
  {
      shuffleArray(heros).map(friend => 
          <CartoonCard
            id={friend.id}
            image={friend.image}
            name={friend.name}
            handleCount={this.handleCount}
            checked={friend.checked}
            shake={this.state.shake}
          />
        )}
        </main>
  </>
  );
}
}

export default Game;