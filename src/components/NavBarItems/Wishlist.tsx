import { Link } from "react-router-dom";
import { IconHeart } from "@tabler/icons-react";

const Wishlist = () => {
  return (
    <Link to="/favorite-episode" className="wishlist-btn">
      <span className="d-center fs-lg">
        <IconHeart />
      </span>
      <span className="badge d-center">
        <span className="tcn-900 fs-base">0</span>
      </span>
    </Link>
  );
};

export default Wishlist;
