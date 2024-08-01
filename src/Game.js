import './css/stan.css'
import { useState } from 'react'
import React from "react";
//aiden
import a1 from './aiden/1.mp4'
import a2 from './aiden/2.mp4'
import a3 from './aiden/3.mp4'
import a4 from './aiden/4.mp4'
import a5 from './aiden/5.mp4'
import a6 from './aiden/6.mp4'
import a7 from './aiden/7.mp4'
import a8 from './aiden/8.mp4'
import a9 from './aiden/9.mp4'
import a10 from './aiden/10.mp4'
import a11 from './aiden/11.mp4'
import a12 from './aiden/12.mp4'
import a13 from './aiden/13.mp4'
import a14 from './aiden/14.mp4'
import a15 from './aiden/15.mp4'
import a16 from './aiden/16.mp4'
import a17 from './aiden/17.mp4'
import a18 from './aiden/18.mp4'
import a19 from './aiden/19.mp4'
import a20 from './aiden/20.mp4'

//michael
import m1 from './michael/1.mp4'
import m2 from './michael/2.mp4'
import m3 from './michael/3.mp4'
import m4 from './michael/4.mp4'
import m5 from './michael/5.mp4'
import m6 from './michael/6.mp4'
import m7 from './michael/7.mp4'
import m8 from './michael/8.mp4'
import m9 from './michael/9.mp4'
import m10 from './michael/10.mp4'
import m11 from './michael/11.mp4'
import m12 from './michael/12.mp4'
import m13 from './michael/13.mp4'
import m14 from './michael/14.mp4'
import m15 from './michael/15.mp4'
import m16 from './michael/16.mp4'
import m17 from './michael/17.mp4'
import m18 from './michael/18.mp4'
import m19 from './michael/19.mp4'
import m20 from './michael/20.mp4'
//josh
import j1 from './josh/1.mp4'
import j2 from './josh/2.mp4'
import j3 from './josh/3.mp4'
import j4 from './josh/4.mp4'
import j5 from './josh/5.mp4'
import j6 from './josh/6.mp4'
import j7 from './josh/7.mp4'
import j8 from './josh/8.mp4'
import j9 from './josh/9.mp4'
import j10 from './josh/10.mp4'
import j11 from './josh/11.mp4'
import j12 from './josh/12.mp4'
import j13 from './josh/13.mp4'
import j14 from './josh/14.mp4'
import j15 from './josh/15.mp4'
import j16 from './josh/16.mp4'
import j17 from './josh/17.mp4'
import j18 from './josh/18.mp4'
import j19 from './josh/19.mp4'
import j20 from './josh/20.mp4'
//nolan
import n1 from './nolan/1.mp4'
import n2 from './nolan/2.mp4'
import n3 from './nolan/3.mp4'
import n4 from './nolan/4.mp4'
import n5 from './nolan/5.mp4'
import n6 from './nolan/6.mp4'
import n7 from './nolan/7.mp4'
import n8 from './nolan/8.mp4'
import n9 from './nolan/9.mp4'
import n10 from './nolan/10.mp4'
import n11 from './nolan/11.mp4'
import n12 from './nolan/12.mp4'
import n13 from './nolan/13.mp4'
import n14 from './nolan/14.mp4'
import n15 from './nolan/15.mp4'
import n16 from './nolan/16.mp4'
import n17 from './nolan/17.mp4'
import n18 from './nolan/18.mp4'
import n19 from './nolan/19.mp4'
import n20 from './nolan/20.mp4'
//mur
import g1 from './mur/1.mp4'
import g2 from './mur/2.mp4'
import g3 from './mur/3.mp4'
import g4 from './mur/4.mp4'
import g5 from './mur/5.mp4'
import g6 from './mur/6.mp4'
import g7 from './mur/7.mp4'
import g8 from './mur/8.mp4'
import g9 from './mur/9.mp4'
import g10 from './mur/10.mp4'
import g11 from './mur/11.mp4'
import g12 from './mur/12.mp4'
import g13 from './mur/13.mp4'
import g14 from './mur/14.mp4'
import g15 from './mur/15.mp4'
import g16 from './mur/16.mp4'
import g17 from './mur/17.mp4'
import g18 from './mur/18.mp4'
import g19 from './mur/19.mp4'
import g20 from './mur/20.mp4'

var videos = [[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20],
                [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20],
                [j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16,j17,j18,j19,j20],
                [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20],
                [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20]]

function getRandomInt(max) {
     return Math.floor(Math.random() * max);
}
var score = 0;
var loss = 0;
var num1 = getRandomInt(5);
var num2 = getRandomInt(20);
var names = ["Aiden", "Michael", "Josh", "Nolan", "Murtaza", ""];
var user = 5

const Game = () => {
    const [video, setVideo] = useState(videos[num1][num2])
    console.log(num1)
    function guess(name) {
        if(name === num1) {
            score++;
            num1 = getRandomInt(5)
            num2 = getRandomInt(20)
            setVideo(videos[num1][num2])
        }
        else {
            user = num1;
            num1 = getRandomInt(5)
            num2 = getRandomInt(20)
            setVideo(videos[num1][num2])
            loss = 1;
            
        }
    }
    function again() {
        num1 = getRandomInt(5)
        num2 = getRandomInt(20)
        setVideo(videos[num1][num2])
        score = 0;
        loss = 0;
    }
    document.body.style = 'background: #8ACE00;';
    if(loss === 0) {
        return ( 
            <div class="center">
                <h1 text-size="65px">WHO SENT THAT REEL</h1>
                <h1 text-align="center">{score}</h1>
                <video width="45%" src={video}  controls></video>
                <div class="selection">
                    <button class="name" onClick={() => (guess(0))}>Aiden</button>
                    <button class="name" onClick={() => (guess(1))}>Michael</button>
                    <button class="name" onClick={() => (guess(2))}>Josh</button>
                    <button class="name"onClick={() => (guess(3))}>Nolan</button>
                    <button class="name" onClick={() => (guess(4))}>Murtaza</button>  
                </div>
            </div>
        );
    }
    else {
        return ( 
            <div class="center">
                <h1 text-size="65px">YOU LOST</h1>
                <h1>Last reel sent by : {names[user]}</h1>
                <h1 text-align="center">{score}</h1>
                <button class="name" onClick={again}>Play Again</button> 
            </div>
        );
    }

}
 
export default Game;