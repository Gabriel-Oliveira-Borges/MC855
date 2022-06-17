import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Option.css'

const Option = (props) => {
    let content;
    console.log(props);
    if (props.image != undefined) {
        content = (
            <div class="ui grid">
                <div class="four wide column">
                    <Image src={props.image} size='small' />
                </div>
                <div class="twelve wide column">
                    <Card.Description>
                        {props.description}
                    </Card.Description>
                </div>
            </div>
        )
    } else {
        content = (
            <div class="ui grid">
                <div class="sixteen wide column">
                    <Card.Description>
                        {props.description}
                    </Card.Description>
                </div>
            </div>
        )
    }

    return (
        <Link id="link-option" to={props.link}>
            <Card className="card">
                <Card.Content>{content}</Card.Content>
            </Card>
        </Link>
    )
};

Option.defaultProps = {
    link: "/",
    image: undefined,
    description: "Lacking description"
}

export default Option;