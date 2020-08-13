import React from 'react';
import Button from '../Button/Button';
import  test from '../../img/test.jpg';
import  favorite from '../../img/favorite.png'
import classes from './FilterResult.module.scss';

const FilterResult = () => {
    return(
        <div className={classes.MainDivStyle}>
            <img src={test} alt="oro srauto manuoklė"/> 
            <div className={classes.SubClassDiv}>
                <h3>Oro Srauto matuoklė</h3>
                <p className={classes.Test}>markė, modelis</p> 
                <img src={favorite} style={{width:'80px'}}/>
                <p>metai, galia, darbinis tūris ir t.t.</p>
                <p>Detalės kodas</p>
                <p>pardavėjas, įvertinimas</p>
                <p>Būklė: </p>
                
            </div>
            <div className={classes.SubClassDiv}>
                <h2>Kaina:</h2>
                <h1>10$</h1>
                <Button> Dėti į krepšelį</Button>
                <Button>Pirkti</Button>
            </div>
            
           
            

        </div>
    )
}

export default FilterResult;