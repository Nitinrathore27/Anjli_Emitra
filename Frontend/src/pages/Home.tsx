import React, { useState } from "react";
import AnjaliEmitraLogo from "../components/icons/AnjaliEmitraLogo";
import Button from "../components/Button";

const Input: React.FC<{
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
}> = ({ type, name, value, onChange, placeholder, label }) => (
    <div className="relative mb-4">
        <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            id={name}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
    </div>
);

const LoginView: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login process
        setTimeout(() => {
            setLoading(false);
            alert("Logged in!");
        }, 2000);
    };

    return (
        <div className="flex h-screen">
            <div className="w-3/4 flex-1 flex items-center justify-center bg-gray-100">
                <AnjaliEmitraLogo />
            </div>
            <div className="w-1/4 flex-1 flex items-center justify-center bg-gray-200">
                <form
                    className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
                    onSubmit={handleFormSubmit}
                >
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        label="Email"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        label="Password"
                    />
                    <Button loading={loading} >Login</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginView;
