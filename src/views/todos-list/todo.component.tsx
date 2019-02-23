import React from 'react'

type Props = {
    onClick: () => any;
    completed: boolean;
    text: string;
}

export const Todo: React.FC<Props> = props => {
    const {onClick, completed, text} = props;

    const handleClick = () => {
        onClick();
    };

    return (
        <li
            onClick={handleClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
};