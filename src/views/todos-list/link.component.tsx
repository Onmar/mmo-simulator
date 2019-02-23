import React from 'react'

type Props = {
    active: boolean;
    onClick: () => any;
}

export const Link: React.FC<Props> = props => {
    const { active, children, onClick } = props;

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            disabled={active}
            style={{
                marginLeft: '4px'
            }}
        >
            {children}
        </button>
    )

};