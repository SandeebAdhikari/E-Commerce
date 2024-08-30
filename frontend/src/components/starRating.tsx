import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, reviewCount }) => {
  const totalStars = 5;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        // Full Star
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Half Star
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        // Empty Star
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <span className="ml-2 text-gray-600">{reviewCount}</span>
    </div>
  );
};

export default StarRating;
