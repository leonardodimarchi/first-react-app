import React from 'react';
import ReactDOM from 'react-dom';



const message = {
    date: new Date(),
    text: "i'm loving this",
    author: {
        name: 'Luiz Toquetto',
        avatar_img: 'https://placekitten.com/200/200',
    }
}

function Message(props){
    return(
        <div className="Message">
            <UserInfo user={props.user.author}/>
            <div className="MessageText">
                {props.user.text}
            </div>
            <div className="FormatedDate">
                {formatDate(props.user.date)}
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



ReactDOM.render(
  <Message user={message}/>,
  document.getElementById('root')
);