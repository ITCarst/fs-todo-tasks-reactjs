import React from 'react';

const TextArea = ({placeholder, classname, onChange}) => (
	<div className="description_holder">
		<div className="description_label">
			<svg className="icon description_icon" viewBox="0 0 32 32">
				<path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"></path>
			</svg>
		</div>
		<textarea 
			className={classname} 
			placeholder={placeholder} 
			tabIndex="100"
			onChange={e => onChange(e.target.value, e)}
		></textarea>
	</div>
);

export default TextArea;

