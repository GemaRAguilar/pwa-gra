import  React, { useState, useEffect } from 'react';
import { Form } from 'reactstrap';
import './../css/game.css';
import { Link } from 'react-router-dom';
import { MdExitToApp, MdPointOfSale } from 'react-icons/md';
import { MdTraffic } from "react-icons/md";
import { RiFootprintFill } from "react-icons/ri";

const Game = ({ player }) => {

    const [color, setColor]= useState(true)
    const [score, setScore] = useState(player.score);

    let clickNow= ""; //const [clickNow, setClickNow] = useState(''); 
    let previousClick=""; //const [previousClick, setPreviousClick] = useState('');
    let counter=0;

    function handleClick(button){
       // if(!color){
            counter++;
            if(clickNow !== ""){
                console.log('paso por clickNow distinto de vacio ')
                previousClick = clickNow;
                clickNow = button;
            }else{
                console.log('paso por clickNow vacio')
                clickNow = button;
            }
            console.log('previousClick', previousClick,'clickNow',clickNow)
      /*  }else{
            counter=0;
            setScore(score)
        }*/
        console.log('counter',counter,'button',button, score)
        points(previousClick,clickNow)
    }

    /*function handleClick(button){
        console.log(button)
        if(clickNow !== ""){
            console.log('paso por clickNow distonto de vacio ')
            previousClick = clickNow;
            clickNow = button;
        }else{
            console.log('paso por clickNow vacio')
            clickNow = button;
        }
        console.log('previousClick', previousClick,'clickNow',clickNow)
       // points(previousClick,clickNow)
    }*/

    function points(previous,now){
        console.log('points')
        console.log('previous',previous,'now',now)
        if(clickNow && !previousClick){
            console.log('primer click')
        }
        if(clickNow && previousClick){
            console.log('segundo click, .....')
            if(clickNow !== previousClick){
                console.log('alterno')
            }
            if(clickNow === previousClick){
                console.log('repito')
                
            }
        }
       
        /*if(clickNow && !previousClick){
            console.log('primer click')
            count++;
            setScore(score+1)
        }
        if(clickNow && previousClick){
            console.log('segundo click, .....')
            if(clickNow !== previousClick){
                console.log('alterno')
                count++;
                setScore(score+1)
            }
            if(clickNow === previousClick){
                console.log('repito')
                if(count >= 1){
                    count--;
                    setScore(score-1)
                }else{
                    count = 0;
                    setScore(0)
                }
                
            }
        }
        console.log(count,score)*/
    }


   /* fun(){
        return numer
    }*/
    function changeColor() {    
        if(color){
            setTimeout( () => {setColor(!color)} , 3000);

            // setColor(!color)} , fun()); hacer llamando a la funcion

        }
    }

//setInterval
    React.useEffect(changeColor,[color]);

    useEffect(()=>{
        const allPlayers = JSON.parse(window.localStorage.getItem('player'));
        const players = allPlayers.filter( person => person.name !== player.name )
        window.localStorage.setItem('player', JSON.stringify([...players,{...player,score:score}]));
    },[score])

    return (
        <div className="container">MdExitToApp
                <div className='head'>
                <div className='head-left'> Hi {player.name} </div>
                <Link to="/" className='head-right'><MdExitToApp size="48px" color="white" /></Link>
            </div>
            <div className="containerHighScore">
                <div className='score'> High Score: 0</div>
            </div>
                { color ?
                    <div className="traffic" id="red"> <MdTraffic size="96px" color="#e06377"/></div> 
                    : <div className="traffic" id="green"> <MdTraffic size="96px" color="#9ee6ac"/></div>
                }
                <div className="containerScore">
                    <div className='score'> Score: {player.score}</div>
                </div>  
                <Form>
                <div className="form">
                <a className="btn btn-left" value="Left" id="left-button" onClick={() => 
                    handleClick('left')}>
                    <RiFootprintFill size="32px" color="black"/>
                    <div className='textFeet'>LEFT</div>
                </a>
                <div className="v-line"></div>
                <a className="btn btn-right" value="Right" id="right-button" onClick={() => handleClick('right')}>
                    <RiFootprintFill size="32px" color="black"/>
                    <div className='textFeet'>RIGHT</div>
                </a>
                </div>
            </Form> 
        </div>
    );
}

export default Game;