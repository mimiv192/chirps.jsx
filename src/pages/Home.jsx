import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import ListItem from "../components/ListItem.jsx";
import _ from 'lodash';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            chirps: [
              {
                id: 1,
                name: "Welcome",
                description: "Hello World",
                completed: true
              },
              {
                id: 2,
                name: "Donald Trump",
                description: "President 2018",
                completed: false
              },
              {
                id: 3,
                name: "Pepper the Dog",
                description: "11 months old",
                completed: true
              }
      
            ]
          };
        }
      
      
      
      
    
    handleOnClick = id => {
        const chirps = _.cloneDeep(this.state.chirps);
        for (let chirp of chirps) {
          if (chirp.id === id) {
            chirp.completed = !chirp.completed;
            break;
          }
        }
        this.setState({ chirps });
      }

    render() {
        const { chirps } = this.state;
        return (
            <div>
                <Navbar />

               
                <div className="container">
                    <h2>See what's happening in the world right now</h2>
                    <h3>Tweet</h3>
                    <p>It all begins with a Tweet. Join or start any conversation in the world with a simple Tweet. Find more tips about posting a Tweet.</p>
                    <h4>Retweet</h4>
                    <p>See something you like? Retweet it to spread the word instantly. Read more about Retweeting another Tweet.</p>
                </div>
                <div className="App">
          <h3> Chirps </h3>
          <ul>
            {chirps.map(chirp =>
              <ListItem
                key={chirp.id}
                id={chirp.id}
                name={chirp.name}
                completed={chirp.completed}
                description={chirp.description}
                handleOnClick={this.handleOnClick}
              />
            )}
          </ul>
        </div>



            </div>
        );
    }
}

export default Home

// ReactDOM.render(<App />), document.getElementById('root');