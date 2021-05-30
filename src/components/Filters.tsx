import React from "react";

const Filters = () => {
	return (
		<div className='filters-section'>
			<small>{0} items left</small>
			<div className='filters'>
				<button className='btn btn-filter' title='view all'>
					all
				</button>
				<button className='btn btn-filter' title='view active'>
					active
				</button>
				<button className='btn btn-filter' title='view completed'>
					completed
				</button>
			</div>
			<button className='btn btn-filter' title='clear completed'>
				clear completed
			</button>
		</div>
	);
};

export default Filters;
