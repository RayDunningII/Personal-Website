import React from 'react';

import linkedin from '../images/linkedin.jpg';
import github from '../images/github.png';
import lvlup from '../images/lvlup.png';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LvlUp Fitness',
                    subTitle: 'track, add and manage a workout routine',
                    link: 'https://levelupfitness.herokuapp.com/Profile',
                    selected: false

                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: 'Ray/s Github account',
                    link: 'https://github.com/RayDunningII',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    subTitle: 'Ray/s LinkedIn',
                    link: 'https://www.linkedin.com/in/ray-dunning-ii/',
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
     
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
              item.selected = false; 
            }
            })

            this.setState({
                items
            })
    };

    

    render() {
      return(
          <p>Hai</p >
      )
    }

}


export default Carousel;