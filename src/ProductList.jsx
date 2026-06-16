import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        id: 1,
        name: "Lavender",
        description: "Known for its soothing aroma and beautiful purple flowers.",
        cost: 15,
        image: "https://images.unsplash.com/photo-1612025876377-5f7fa10c51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 2,
        name: "Rosemary",
        description: "A fragrant evergreen herb used in culinary dishes.",
        cost: 12,
        image: "https://images.unsplash.com/photo-1594314015601-44c207198f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 3,
        name: "Mint",
        description: "Refreshing aromatic plant often used in teas and foods.",
        cost: 8,
        image: "https://images.unsplash.com/photo-1600854448530-9b3628e930f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 4,
        name: "Jasmine",
        description: "Famous for its intensely fragrant small white flowers.",
        cost: 18,
        image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d9b23b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 5,
        name: "Thyme",
        description: "A delicate herb with tiny leaves and a pungent, earthy flavor.",
        cost: 10,
        image: "https://images.unsplash.com/photo-1595867918804-034870f7ecfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 6,
        name: "Basil",
        description: "Sweet, aromatic herb central to Italian cooking.",
        cost: 9,
        image: "https://images.unsplash.com/photo-1606214532822-0dcd6e864ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        description: "Succulent plant species known for its healing gel.",
        cost: 10,
        image: "https://images.unsplash.com/photo-1554631221-5634fbd9fd91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 8,
        name: "Peppermint",
        description: "Hybrid mint used for digestive ailments and flavorings.",
        cost: 8,
        image: "https://images.unsplash.com/photo-1600854448530-9b3628e930f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 9,
        name: "Chamomile",
        description: "Daisy-like plant commonly used to make herbal tea for sleep.",
        cost: 12,
        image: "https://images.unsplash.com/photo-1608611846554-db27b50f7574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 10,
        name: "Echinacea",
        description: "Herbaceous flowering plant used to prevent colds.",
        cost: 15,
        image: "https://images.unsplash.com/photo-1627914595166-267fc28dfaee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 11,
        name: "Lemon Balm",
        description: "Lemon-scented herb in the mint family, calming effects.",
        cost: 11,
        image: "https://images.unsplash.com/photo-1594314015601-44c207198f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 12,
        name: "Ginger",
        description: "Root plant known for easing nausea and digestion.",
        cost: 14,
        image: "https://images.unsplash.com/photo-1595867918804-034870f7ecfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    category: "Decorative Plants",
    plants: [
      {
        id: 13,
        name: "Snake Plant",
        description: "Hardy indoor plant that requires very little maintenance.",
        cost: 20,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 14,
        name: "Monstera",
        description: "Tropical plant with distinctive split leaves.",
        cost: 25,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 15,
        name: "Peace Lily",
        description: "Elegant plant known for air-purifying qualities.",
        cost: 22,
        image: "https://images.unsplash.com/photo-1596547609652-9cb5d8d9b23b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 16,
        name: "Spider Plant",
        description: "Easy-to-grow trailing plant with striped leaves.",
        cost: 12,
        image: "https://images.unsplash.com/photo-1612025876377-5f7fa10c51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 17,
        name: "ZZ Plant",
        description: "Extremely resilient plant with glossy, dark green leaves.",
        cost: 28,
        image: "https://images.unsplash.com/photo-1554631221-5634fbd9fd91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 18,
        name: "Ficus",
        description: "Popular indoor tree with shiny, weeping leaves.",
        cost: 35,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAddedToCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div className="product-list-container">
      {plantsData.map((categoryGroup, index) => (
        <div key={index} className="category-section">
          <h2>{categoryGroup.category}</h2>
          <div className="product-grid">
            {categoryGroup.plants.map(plant => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-title">{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-price">${plant.cost}</p>
                  <button 
                    className={`add-to-cart-btn ${isAddedToCart(plant.name) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAddedToCart(plant.name)}
                  >
                    {isAddedToCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
