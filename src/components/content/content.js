import React from 'react'
import classes from './styles.module.css'
import {useSelector} from 'react-redux'
import logo from '../../assets/github-icon.svg'

const Content = () => {

    const username = useSelector((state) =>  state.user[0]?.user) 

    return (
        <div className={classes.root}>
            <img src={username && username.avatar_url || logo} alt="" className={classes.img} />
            <h1>{username && username.name || "Username"}</h1>
            <h2>{username && username.login || "User Login"}</h2>
            <p>{ username && username.bio || "About User" }</p> 
        </div> 
    )
}

export default Content
