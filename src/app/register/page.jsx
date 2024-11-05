'use client'
import { useActionState } from "react";
import { useState } from "react";
export default function RegisterForm() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (currentState, formData) => {
    console.log(formState)
 //   event.preventDefault();

    // Wywołujemy Server Action
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccessMessage(data.message);
      setErrorMessage(null); // Wyczyść ewentualne poprzednie błędy
      return {loading:false}
    } else {
      setErrorMessage(data.error || "Something went wrong");
      setSuccessMessage(null); // Wyczyść ewentualne poprzednie komunikaty sukcesu
      return null;
    }
  };
  const [formState,formAction] = useActionState (handleSubmit,{loading:false});
  return (
    <form action={formAction} className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
 
        className={`w-full p-2 rounded-md ${formState.loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white font-semibold`}
      >
        {formState.loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}