import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitted(true);
        setIsLoading(false);
    };

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
                    <p className="mt-2 text-purple-100">
                        {isSubmitted ? "Check your email" : "Reset your password"}
                    </p>
                </div>
                
                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center space-y-6">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-lg font-medium text-gray-900">Password reset link sent</h2>
                            <p className="text-sm text-gray-600">
                                We've sent instructions to reset your password to {email}. 
                                Please check your email and follow the link provided.
                            </p>
                            <div className="pt-4">
                                <Link
                                    to="/signin"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Return to sign in
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Enter the email address associated with your account and we'll send you a link to reset your password.
                                    </p>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Send reset link'}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6 text-center text-sm">
                                <span className="text-gray-600">Remember your password? </span>
                                <Link to="/signin" className="font-medium text-purple-600 hover:text-purple-500">
                                    Sign in
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}