import React, { useEffect, useState } from 'react';
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import DeleteBtn from '../DeleteBtn';
import API from '../../utils/index';
import { useStoreContext } from '../../utils/GlobalState';

const axios = require("axios");


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    friendlistUL: {
        padding: '5px'
    }
}));

function deleteFriends(id) {
    API.deleteFriend(id).then(results => {
        console.log(results)
    })
}

function FriendsList(props) {
    const classes = useStyles();
    // const [friends, setFriends] = useState([]);
    const [state, dispatch] = useStoreContext();

    // function getAllFriends() {
    useEffect(() => {
        getFriends();
    }, []);

    function getFriends() {
        API.getUserFriends().then(results => {
            console.log("myFriends: ", results.data)
            dispatch({type: "GET_USER_FRIENDS", friends: results.data})
        })
    }
        
    // const friendsList = [
    //     // this will eventually get removed and call from the database to show each user's friends to the dom
    //     { name: 'Kendra Kwoka', id: 1},
    //     { name: 'Eric Garcia', id: 2},
    //     { name: 'Caitlin Huber', id: 3},
    //     { name: 'Leander Turner', id: 4},
    //     { name: 'Emily Taylor', id: 5}
    //   ];

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                Friend List:
                <ul className={classes.friendlistUL}>
                    {state.userFriends.map(friend => (
                        <li key={friend.name}>
                            <Link to={`/users/${friend.id}`}>
                            {friend.name}
                            </Link>
                            <DeleteBtn onClick={() => deleteFriends(friend._id)}/> 
                        </li>
                    ))}
                </ul>
            </Paper>
        </div>
    )
}

export default FriendsList;