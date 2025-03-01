import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${category.toLowerCase()}`);
  };

  return (
    <div className="category-card">
      <img src={image} alt={category} />
      <h3>{category}</h3>
      <button onClick={handleClick}>Shop {category}</button>
    </div>
  );
};

export default CategoryCard;
