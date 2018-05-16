import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const FoodList = ({food}) => {
  return(
    <div style={{width: '440px',marginLeft:'35%'}}>
      
      <Card>
          <CardMedia
            overlay={<CardTitle title={food.name} />}
          >
            <img src={food.image} alt="food" />
          </CardMedia>
          <CardText>
            <h4>Calories:</h4> {food.calories}
          </CardText>
      </Card>
    </div>
  )
}