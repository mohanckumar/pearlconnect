import React from 'react';

import App from './../App.tsx';

import Home from '../pages/rnr/home/home.tsx';
import Rewards from '../pages/rnr/rewards/rewards.tsx';
import RewardHistory from '../pages/rnr/rewardHistory/rewardHistory.tsx';
import Checkout from '../pages/rnr/checkout/checkout.tsx';

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