
import App from './../App.tsx';

import Home from '../pages/rewards/home/Home.tsx';
import Rewards from '../pages/rewards/rewards/Rewards.tsx';
import RewardHistory from '../pages/rewards/rewardhistory/RewardHistory.tsx';
import Checkout from '../pages/rewards/checkout/Checkout.tsx';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{
				path: '', 
				element: <Home />
			},
			{
				path: 'home', 
				element: <Home />
			},
 
		{
			path: 'rewards', 
			element: <Rewards />
		},
		{
			path: 'checkout', 
			element: <Checkout />
		},
		
			{
				path: 'history', 
				element: <RewardHistory />
			},
		
		
		]
  }
];


export default AppRoute;