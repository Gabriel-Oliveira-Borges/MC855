import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Option.css'

const Option = (props) => {
    let content;
    
    if (props.image !== undefined) {
        content = (
            <div class="ui grid">
                <div class="four wide column">
                    <Image src={props.image} size='small' />
                </div>
                <div class="twelve wide column">
                    <Card.Description dangerouslySetInnerHTML={{__html: props.description}} />
                </div>
            </div>
        )
    } else {
        content = (
            <div class="ui grid">
                <div class="sixteen wide column">
                <Card.Description dangerouslySetInnerHTML={{__html: props.description}} />
                </div>
            </div>
        )
    }

    return (
        <div className="Option">
            <Link id="link-option" to={props.link}>
                <Card>
                    <Card.Content>{content}</Card.Content>
                </Card>
            </Link>
        </div>
    )
};

Option.defaultProps = {
    link: "/",
    image: undefined,
    description: "Lacking description"
}

export default Option;