import { FC } from 'react';
import { useSelector } from 'react-redux';
// MUI
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// Store
import { useAppDispatch } from '../hooks';
import { selectProductItem } from '../../adapters/redux/products';
// Interfaces
import { Product } from '../../domain/entities';
import { addItem } from '../../adapters/redux/cart/actions';

type IProductItem = Omit<Product, 'description' | 'tags'>;

const ProductItem: FC<IProductItem> = ({ id }) => {
  const dispatch = useAppDispatch();
  const product = useSelector(selectProductItem(id));

  if (!product) {
    return null;
  }

  const { name, image, author, price } = product;

  const addToCartHandler = () => {
    dispatch(addItem(id, price));
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardMedia image={image} title={name} sx={{ height: 140 }} />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography
            variant="h6"
            component="h4"
            sx={{ fontSize: '1rem', fontStyle: 'italic', mb: '10px' }}
          >
            {author}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCartHandler}>Купить</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
