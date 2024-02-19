import React from "react";
import toast from 'react-hot-toast';

export const Notification = async (response) => {
	let notifs;
	let tmp;
	if (typeof response !== 'string') {
		const data = await response.json();
		if (response.status === 400 || response.status === 401)
			tmp = data.message;
		else if (response.status === 403) 
			tmp = [data];
		else
			tmp = data;
	}
	else
		tmp = [response];
	if (typeof tmp === 'string')
		notifs = [tmp];
	else
		notifs = tmp;
	notifs.forEach((errorMsg) => {
		toast.custom(
			<div className='ErrorNotif'>
				{errorMsg}
			</div>,
			{
				duration: 5000,
				position: 'top-center',

				// Aria
				ariaProps: {
				role: 'status',
				'aria-live': 'polite',
				},
			}
		);
	});
};