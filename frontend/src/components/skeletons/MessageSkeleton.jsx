const MessageSkeleton = () => {
	return (
	  <div className="flex flex-col gap-3 my-2">
		<div className="flex gap-3 items-center justify-start">
		  <div className="skeleton w-10 h-10 rounded-full bg-gray-700"></div>
		  <div className="flex flex-col gap-1">
			<div className="skeleton h-4 w-40 bg-gray-700 rounded"></div>
			<div className="skeleton h-4 w-32 bg-gray-700 rounded"></div>
		  </div>
		</div>
		<div className="flex gap-3 items-center justify-end">
		  <div className="flex flex-col gap-1">
			<div className="skeleton h-4 w-40 bg-gray-700 rounded"></div>
		  </div>
		  <div className="skeleton w-10 h-10 rounded-full bg-gray-700"></div>
		</div>
	  </div>
	);
  };
  
  export default MessageSkeleton;
  