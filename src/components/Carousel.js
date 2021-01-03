import React from 'react';

import Card from '../components/Card';
import linkedin from '../images/linkedin.jpg';
import github from '../images/github.png';
import lvlup from '../images/lvlup.png';
import { Container, Row} from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LvlUp Fitness',
                    subTitle: 'track, add and manage a workout routine',
                    imgSrc: lvlup,
                    link: 'https://levelupfitness.herokuapp.com/',
                    selected: false

                },
                {
                    id: 1,
                    title: 'GitHub',
                    subTitle: 'My Github account',
                    imgSrc: github,
                    link: 'https://github.com/RayDunningII',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    subTitle: 'My LinkedIn',
                    imgSrc: linkedin,
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

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}  /> 
        })

    }

    

    render() {
      return(
          <Container fluid={true}>
              <Row className='justify-content-around'>
                  {this.makeItems(this.state.items)}
              </Row>
          </Container>
      )
    }

}


export default Carousel;