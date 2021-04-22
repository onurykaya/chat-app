import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {
            "Project-ID": "a5d50f68-c5c7-4da3-88b9-0f3f73a2c50b",
            "User-Name": username,
            "User-Secret": password
        };
        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject
            });
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.reload();
        } catch (error) {
            setError("Kullanıcı adı veya şifre hatalı!");
        }
        //username - password => chatengine -> give messages
        // error -> try with new username
    };
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Welcome!</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        className="input"
                        placeholder="Kullanıcı Adı"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        className="input"
                        placeholder="Şifre"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Giriş Yap</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};
export default LoginForm;
