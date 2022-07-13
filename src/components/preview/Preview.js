import React from "react";
import "./Preview.css";
import MedicalSpecialtyButton from "../../components/medicalSpecialtyButton/medicalSpecialtyButton";
import ImageMap from "../../constants/images"

function Preview({page}) {

    const img = () => {
        if (page.icon === undefined) {
            return null
        } else {
            return <img src={ImageMap[page.icon].path} alt={ImageMap[page.icon].altText} />
        }
    }

	return (
		<div className="Preview">
			{page && <><div className="Header">
				<div className="breadcrumb" >
					<div className='link'>
						<i className="angle left icon"></i>
						Voltar
					</div>
				</div>

				<div className="title">
					<span as='h1'>{page.title}</span>
				</div>

				<div className="pageIcon">{img()}</div>
			</div>
			<div className="Container">
				<div className="Content" dangerouslySetInnerHTML={{ __html: page.body }} />
				<div className="Footer">
					<MedicalSpecialtyButton/>
				</div>
			</div> </>}
		</div>
	)
}

export default Preview;