import { useState } from "react";
function Login() {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        let { name, valule } = event.target;
        setData({ ...data, [name]: value });
    }


    return (
        <>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Username:</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            id='username'
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                        ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;