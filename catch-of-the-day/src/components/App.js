import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

export default class App extends React.Component{
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
       //take a copy of the exsiting state
       const fishes = { ...this.state.fishes };
       //add our new fish to the fishes var
       fishes[`fish${Date.now()}`] = fish;
       //set the new fishes obj to state
       this.setState({
           fishes,
       })
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes,
        })
    };

    render(){
        return (
            <div className="catch-of-the-day"> 
               <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
               </div>
               <Order />
               <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        );
    }
}