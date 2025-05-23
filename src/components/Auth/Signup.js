import React, { useState } from "react";
import useUserContext from "../../contexts/UserContext";
import { Navigate, Link } from "react-router-dom";

const validUsernamePattern = /^[\w.@+-]+$/;

function validateUsername(username) {
    if (!username || username.at(-1) === " ") return false;
    return Boolean(username.match(validUsernamePattern));
}

export default function SignUp() {
    const { user, signup } = useUserContext();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
    });
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        
        if (formData.password !== formData.passwordConfirm) {
            setPasswordError(true);
            setIsLoading(false);
            return;
        }
        
        try {
            await signup(formData, (error) => {
                const data = error.response.data;
                alert(data.username);
            });
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        
        if (e.target.name === "username") {
            const isValid = validateUsername(e.target.value);
            setUsernameError(!isValid);
        }
        
        // Clear password error when user starts typing
        if (e.target.name === "passwordConfirm") {
            setPasswordError(false);
        }
    };

    if (user) return <Navigate to="/" />;
    
    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Decorative header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-center">
                    <div className="flex justify-center items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path
                                fill="white"
                                fillRule="evenodd"
                                d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75a.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75a.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <h1 className="text-2xl font-bold text-white">LinkUp</h1>
                    </div>
                    <p className="mt-2 text-purple-100">Create your account to get started</p>
                </div>
                
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    className={`w-full px-4 py-3 rounded-lg border ${usernameError ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                    autoFocus
                                />
                                {usernameError && (
                                    <p className="mt-1 text-sm text-red-600">
                                        Username can only contain letters, numbers, and @/./+/-/_ characters
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Use at least 8 characters with a mix of letters, numbers and symbols
                                </p>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    id="passwordConfirm"
                                    required
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className={`w-full px-4 py-3 rounded-lg border ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                                />
                                {passwordError && (
                                    <p className="mt-1 text-sm text-red-600">
                                        Passwords don't match
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the <Link to="/terms" className="text-purple-600 hover:text-purple-500">Terms of Service</Link>
                            </label>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading || usernameError}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''} ${usernameError ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating account...
                                    </>
                                ) : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link to="/signin" className="font-medium text-purple-600 hover:text-purple-500">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}