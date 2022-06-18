import React from "react";
import Option from '../../components/option/Option'
import ImageMap from '../../constants/images'
import "./PageContentOptions.css";

function PageContentOptions({ options }) {
	console.log("Options: ", options)
	return (
		<div className="PageContentOptions">
			{
				options.map(item => {
					return <Option
						className="link-option"
						link={item.link}
						image={ImageMap[item.image].path}
						description={item.description}
					/>
				})
			}
		</div>
	)
}

export default PageContentOptions;