import App from "./../App.tsx";

import Home from "../pages/rewards/home/Home.tsx";
import Rewards from "../pages/rewards/rewards/Rewards.tsx";
import RewardHistory from "../pages/rewards/rewardhistory/RewardHistory.tsx";
import Checkout from "../pages/rewards/checkout/Checkout.tsx";

const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      {
        //default route page
        path: "",
        element: <Home />,
      },
      {
        //route for home page
        path: "home",
        element: <Home />,
      },

      {
        //route for rewards page
        path: "rewards",
        element: <Rewards />,
      },
      {
        //route for checkout  page
        path: "checkout",
        element: <Checkout />,
      },

      {
        //route for history page
        path: "history",
        element: <RewardHistory />,
      },
    ],
  },
];

export default AppRoute;
