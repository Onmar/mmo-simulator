import React from 'react'

type Props = {
    onSubmit: (payload: {text: string}) => any;
}

export const AddTodoComponent: React.FC<Props> = props => {
    const { onSubmit } = props;

    let input: HTMLInputElement;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        onSubmit({text: input.value});
        input.value = '';
    };

    return (
        <div>
            <form
              onSubmit={handleSubmit}
            >
                <input
                    ref={node => {
                        if(node) {
                            input = node
                        }
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )

};
