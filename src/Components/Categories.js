import React, { useState } from 'react';
import './Categories.css';
import categories from './Categories.json';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useCart } from './CartContext'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className="star full-star">&#9733;</span>);
    } else if (hasHalfStar && i === fullStars) {
      stars.push(<span key={i} className="star half-star">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }

  return <div className="star-rating">{stars}</div>;
  // ... StarRating component code ...
};

const Categories = () => {
  const [collectionFilter, setCollectionFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]); // Default price range
  const { dispatch } = useCart();

  const filteredCategories = categories
    .filter(product => {
      if (collectionFilter === 'all') {
        return true;
      }
      return product.collection === collectionFilter;
    })
    .filter(product => {
      const productPrice = parseFloat(product.price);
      return productPrice >= priceRange[0] && productPrice <= priceRange[1];
    })
    .sort((a, b) => {
      if (priceSort === 'lowToHigh') {
        return a.price - b.price;
      }
      if (priceSort === 'highToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  const handleCollectionChange = event => {
    setCollectionFilter(event.target.value);
  };

  const handlePriceSortChange = event => {
    setPriceSort(event.target.value);
  };

  const handlePriceRangeChange = values => {
    setPriceRange(values);
  };
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.title} added to cart successfully!`);
  };

  return (
    <div className="categories-container">
      <div className='categories-heading'>
        <h1>COLLECTIONS OF SHOP IT</h1>
      </div>

      <div className="filters">
        <label>
          Collection:
          <select value={collectionFilter} onChange={handleCollectionChange}>
            <option value="all">All</option>
            <option value="men">Men's Collection</option>
            <option value="women">Women's Collection</option>
          </select>
        </label>
        <label>
          Price:
          <select value={priceSort} onChange={handlePriceSortChange}>
            <option value="">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </label>
        <label>
          Price Range:
          <Slider
            range
            min={0}
            max={2000} // Adjust the max value based on your data
            defaultValue={priceRange}
            onChange={handlePriceRangeChange}
          />
        </label>
      </div>

      <div className="product-container">
        {filteredCategories.map((product, index) => (
          <div className="product-item" key={index}>
          <img className="product-image" src={product.image} alt={`Product ${index}`} />
          <p>Price: ${product.price}</p>
          <p>{product.title}</p>
          {product.rating && (
            <div className="star-rating">
              <StarRating rating={product.rating} />
            </div>
          )}
          
          <div className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</div>
{/* This will appear on hover */}
        </div>
      
        ))}
      </div>
    </div>
  );
}

export default Categories;
