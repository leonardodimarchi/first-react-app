import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const message = {
    date: new Date(),
    text: "i'm loving this",
    author: {
        name: 'Luiz Toquetto',
        avatar_img: 'https://placekitten.com/g/200/200',
    }
}


function Message(props){
    const [numberOfLikes, setNumberOfLikes] = useState(0)

    function likedButton(){
        setNumberOfLikes(numberOfLikes+1)
    }

    return(
        <div className="Message">
            <UserInfo user={props.user.author}/>
            <div className="MessageText">
                {props.user.text}
            </div>
            <div className="FormatedDate">
                {formatDate(props.user.date)}
            </div>
            <div>
                <button onClick={likedButton}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className="likeButtonText">{numberOfLikes}</span>
            </div>
        </div>
    )
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Avatar(props){
    return(
        <img className="Avatar" 
            src={props.user.avatar_img} 
            alt={props.user.name}>
        </img>
    )
}

function formatDate(date){
    return date.toLocaleDateString()
}

const elementMessage = <Message user={message}/>

ReactDOM.render(
  elementMessage,
  document.getElementById('root')
);