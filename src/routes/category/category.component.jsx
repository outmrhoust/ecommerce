import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

<<<<<<< HEAD
import {CategoryContainer,CategoryTitle} from './category.styles';
=======
import './category.styles.scss';
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
<<<<<<< HEAD
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
=======
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
<<<<<<< HEAD
      </CategoryContainer>
=======
      </div>
>>>>>>> ebc06ffc2ed5831344d39267163f483f10bf5046
    </Fragment>
  );
};

export default Category;