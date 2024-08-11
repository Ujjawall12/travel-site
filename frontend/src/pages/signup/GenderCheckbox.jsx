// src/pages/signup/GenderCheckbox.jsx

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
	  <div className="flex space-x-4 mt-4">
		<div className="form-control">
		  <label
			className={`flex items-center space-x-2 cursor-pointer ${
			  selectedGender === "male" ? "bg-blue-100 rounded-lg p-2" : ""
			}`}
		  >
			<input
			  type="checkbox"
			  className="checkbox checkbox-primary"
			  checked={selectedGender === "male"}
			  onChange={() => onCheckboxChange("male")}
			/>
			<span className="label-text">Male</span>
		  </label>
		</div>
		<div className="form-control">
		  <label
			className={`flex items-center space-x-2 cursor-pointer ${
			  selectedGender === "female" ? "bg-pink-100 rounded-lg p-2" : ""
			}`}
		  >
			<input
			  type="checkbox"
			  className="checkbox checkbox-primary"
			  checked={selectedGender === "female"}
			  onChange={() => onCheckboxChange("female")}
			/>
			<span className="label-text">Female</span>
		  </label>
		</div>
	  </div>
	);
  };
  
  export default GenderCheckbox;
  
  

// STARTER CODE FOR THIS FILE
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;