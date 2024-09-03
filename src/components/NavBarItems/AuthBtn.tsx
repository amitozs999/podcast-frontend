import { Link } from "react-router-dom";
//import DynamicIcon from "../../utils/DynamicIcon";
import { IconArrowRight } from "@tabler/icons-react";
const AuthBtn = () => {
  return (
    <div className="auth-btn order-last d-flex align-items-center justify-content-end mx-2 flex-column flex-sm-row  gap-2 gap-xl-4 gap-xxl-6  w-100">
      <Link to="/login" className="bttn-1 bttn-outline">
        <span className="text-nowrap fw-semibold">Login</span>
        <span className="icon icon-right">
          {/* <DynamicIcon iconName="IconArrowRight" /> */}

          <IconArrowRight />
        </span>
      </Link>
      <Link to="/register" className="bttn-1 alt-position">
        <span className="text-nowrap fw-semibold">Register</span>
        <span className="icon icon-right">
          <IconArrowRight />
          {/* <DynamicIcon iconName="IconArrowRight" /> */}
        </span>
      </Link>
    </div>
  );
};

export default AuthBtn;
