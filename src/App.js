import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import preval from 'preval.macro';

import 'hover.css';

import island from './img/acnh_island.png';
import islandFruit from './img/acnh_fruit.png';
import islandFlowers from './img/acnh_flowers.png';
import islandTrees from './img/acnh_trees.png';
import islandVillagers from './img/acnh_villagers.png';

const useLegendStyles = makeStyles((theme) => ({
  form: {
    display: 'block'
  },
}));

function Legend({ treesChecked=true, onTreesChecked, fruitChecked=true, onFruitChecked, flowersChecked=true, onFlowersChecked, villagersChecked=true, onVillagersChecked }) {
  const classes = useLegendStyles();

  const handleTreesChecked = (event) => {
    onTreesChecked(event.target.checked);
  };

  const handleFruitChecked = (event) => {
    onFruitChecked(event.target.checked);
  };

  const handleFlowersChecked = (event) => {
    onFlowersChecked(event.target.checked);
  };

  const handleVillagersChecked = (event) => {
    onVillagersChecked(event.target.checked);
  }

  return (
    <FormControl component="fieldset" className={classes.form}>

      <FormControlLabel
        control={<Checkbox checked={treesChecked} onChange={ handleTreesChecked } name="trees" />}
        label="Trees"
      />

      <FormControlLabel
        control={<Checkbox checked={fruitChecked} onChange={ handleFruitChecked } name="fruit" />}
        label="Fruit"
      />

      <FormControlLabel
        control={<Checkbox checked={flowersChecked} onChange={ handleFlowersChecked } name="flowers" />}
        label="Flowers"
      />
        
      <FormControlLabel
        control={<Checkbox checked={villagersChecked} onChange={ handleVillagersChecked } name="villagers" />}
        label="Villagers"
      />

    </FormControl>
  );
}

const useIslandStyles = makeStyles((theme) => ({
  layerImage: {
    position: 'absolute',
    objectFit: 'contain',
    borderRadius: '40px',
  },
  image: {
    objectFit: 'contain',
    background: '#75d5ff',
    borderRadius: '40px',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)'
  },
}));

function Island({ checked, onHoverStart, onHoverEnd }) {
  const classes = useIslandStyles();

  const islandImage = () => {
    return island;
  }

  return (
    <div className="hvr-grow" onMouseEnter={ onHoverStart } onMouseLeave={ onHoverEnd }>
      { checked.trees !== true ? '' : (
          <img alt="ACNH Trees" src={ islandTrees } width="100%" height="100%" align="center" className={classes.layerImage}/>
        )
      } 

      { checked.fruit !== true ? '' : (
          <img alt="ACNH Fruit" src={ islandFruit } width="100%" height="100%" align="center" className={classes.layerImage}/>
        )
      } 
      
      { checked.flowers !== true ? '' : (
          <img alt="ACNH Flowers" src={ islandFlowers } width="100%" height="100%" align="center" className={classes.layerImage}/>
        )
      } 

      { checked.villagers !== true ? '' : (
          <img alt="ACNH Villagers" src={ islandVillagers } width="100%" height="100%" align="center" className={classes.layerImage}/>
        )
      } 

      <img alt="ACNH Island" src={ island } width="100%" height="100%" align="center" className={classes.image }/>
    </div> 
  );
}

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
    maxHeight: '600px',
    width: '80%',
    maxWidth: '600px',
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

export default function App() {
  const classes = useStyles();
  const buildDate = preval`module.exports = new Date().toLocaleString("en").toLowerCase();`;

  const [treesChecked, setTreesChecked] = React.useState(true);
  const [fruitChecked, setFruitChecked] = React.useState(true);
  const [flowersChecked, setFlowersChecked] = React.useState(false);
  const [villagersChecked, setVillagersChecked] = React.useState(true);

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
      (c) 2020 julian weiss
      <br/>
      fruit: <a href="http://kafae-latte.deviantart.com/art/Animal-Crossing-Fruits-356876907">kafae-latte</a></div>

      <div className={classes.paper}>
        <Island
          checked={{
            trees: treesChecked,
            fruit: fruitChecked,
            flowers: flowersChecked,
            villagers: villagersChecked,
          }}

          onHoverStart={ () => setIsHovering(true) }
          onHoverEnd={ () => setIsHovering(false) }
        />

        {
          isHovering ? '' : (
            <div className={classes.caption}>
              <Legend 
                treesChecked={treesChecked} 
                onTreesChecked={(checked) => setTreesChecked(checked)}
                fruitChecked={fruitChecked} 
                onFruitChecked={(checked) => setFruitChecked(checked)}
                flowersChecked={flowersChecked} 
                onFlowersChecked={(checked) => setFlowersChecked(checked)}
                villagersChecked={villagersChecked}
                onVillagersChecked={(checked) => setVillagersChecked(checked)}
              />
              <span style={{
                opacity: 0.4
              }}>
               { buildDate }
              </span>
            </div>
          )
        }
      </div>

    </div>
  );
}