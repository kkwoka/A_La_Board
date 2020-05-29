import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchGameList from '../SearchGameList';
import SearchBGG from '../SearchBGG';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './searchBar.css';


const useStyles = makeStyles((theme) => ({
    moreFriends: {
        textAlign: 'center',
        marginLeft: '1rem !important',
        marginRight: '1rem !important',
        listStyleType: 'none'
    }, 
    searchBarLI1: {
        fontFamily: 'Pangolin',
        fontSize: '13px',
        padding: '10px 5px 0px 5px'
    },
    searchBarLI2: {
        fontFamily: 'Pangolin',
        fontSize: '13px',
        padding: '0px 5px 10px 5px'
    },
}));

function SearchBar(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <SearchGameList/>
                </Grid>

                <Grid item xs={4} >
                    <SearchBGG setAppState={props.stateChange}/>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={classes.moreFriends}>
                        <li className={classes.searchBarLI1}>
                            <Link to="/search_friends">
                                Want to Find More Friends?
                            </Link>
                        </li>
                        --
                        <li className={classes.searchBarLI2} >
                            <Link to="/planmyevent" >
                                Want to Plan a Game Night?
                            </Link>
                        </li>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchBar;