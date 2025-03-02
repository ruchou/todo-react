import React, {useState} from "react";

function Form(props) {
    const [name, setName] = useState('');
    const [url,setUrl] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        props.addTask(name);
        setName("");
    }
    function handleChange(e) {
        setName(e.target.value);
    }

    function myHandleSubmit(e) {
        e.preventDefault();
        if(!url.trim()){
            return;
        }
        props.sendUrl(url);
        setUrl("");

    }

    function myHandleChange(e) {
        setUrl(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?
                    </label>
                </h2>

                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
            </form>

            <form onSubmit={myHandleSubmit}>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={url}
                    onChange={myHandleChange}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
