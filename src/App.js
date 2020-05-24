import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import preval from 'preval.macro';

import 'hover.css';

import island from './img/acnh island may 24 2020.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    background: '#343534',
    overflow: 'scroll',
  },
  paper: {
    margin: 'auto',
    height: '500px',
    width: '500px',
    borderRadius: '40px',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)'
  },
  image: {
    objectFit: 'contain',
    background: '#75d5ff',
    borderRadius: '40px',
  },
  caption: {
    paddingTop: '10px',
    fontSize: '1em',
    color: 'rgba(255,255,255,0.2)',
    fontWeight: 400,
    textAlign: 'center',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 10,
    bottom: 0,
    height: '50px',
    textAlign: 'right',
    color: 'rgba(255,255,255,0.1)',
    background: 'none',
    fontSize: '0.9em'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  const buildDate = preval`module.exports = new Date().toLocaleString("en").toLowerCase();`;

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
      (c) 2020 julian weiss
      <br/>
      fruit: <a href="http://kafae-latte.deviantart.com/art/Animal-Crossing-Fruits-356876907">kafae-latte</a></div>

      <div className={classes.paper += " hvr-grow"}>
        <img alt="ACNH Island" src={island} width="100%" height="100%" align="center" className={classes.image }/>
        <div className={classes.caption}>{ buildDate }</div>
      </div>

    </div>
  );
}