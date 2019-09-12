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
count: 0,
highest:0
}

handleCount = id => {
   if(!checked.includes(id)){
    checked.push(id) 
  console.log(checked)
  this.setState({
    count: this.state.count + 1,
  });
  if(this.state.count >= this.state.highest){
      this.setState({
          highest: this.state.count + 1
      })
  }
} else {
    this.setState({
        count: 0,
      });
      checked = [];
}
}

render () {
  return (
  <>
   <Navbar 
   count={this.state.count}
   highest={this.state.highest}
   ></Navbar>
  <Header></Header>
  <main className="container">
  
  {
      shuffleArray(heros).map(friend => 
          <CartoonCard
            id={friend.id}
            image={friend.image}
            name={friend.name}
            handleCount={this.handleCount}
            checked={friend.checked}
          />
        )}
        </main>
  </>
  );
}
}

export default Game;