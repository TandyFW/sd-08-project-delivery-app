import { Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography } from '@material-ui/core';
import React from 'react';

function ProductCard() {
  return (
    <Grid item xs={ 12 } s={ 6 } m={ 4 } l={ 3 }>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={ name }
            height="140"
            image={ imagePath }
            title={ name }
          />
          <CardContent>
            <Typography>
              { name }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </Grid>
  );
}

export default ProductCard;
