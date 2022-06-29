import React from "react";
import Option from '../../components/option/Option'
import ImageMap from '../../constants/images'
import "./PageContentOptions.css";

function PageContentOptions({ options }) {
	console.log("Options: ", options)
	if (options === undefined) {
		return (
			<div className="PageContentOptions">
				<div className="ui active inverted dimmer">
					<div className="ui text loader">Carregando...</div>
				</div>
			</div>
		)
	}

	return (
		<div className="PageContentOptions">
			{
				options.map(item => {
					return <Option
						className="link-option"
						link={item.link}
						image={item.image === undefined ? undefined : ImageMap[item.image].path}
						description={item.description}
						key={item.link}
					/>
				})
			}
		</div>
	)
}

export default PageContentOptions;