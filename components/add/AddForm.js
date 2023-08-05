"use-client";
import React from "react";
import { useRouter } from "next/router";
import { POST } from "@/app/api/todos/route";

const AddForm = () => {

    const router = useRouter();
    const [title, setTitle] = React.useState("");
    const [errors, setErrors] = useState({ title: "", form: "" });

    const validateInput = (input, rule) => {
        // TODO: Validate input based on rule
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const titleError = validateInput(title, "title");
    
        if (titleError) {
          setErrors({ ...errors, title: titleError, form: "" });
        } else {
          setErrors({ title: "", form: "" });
          setIsLoading(true);
    
          try {
            const newTodos = {
              userId: 1,
              title,
            };
    
            await POST(newTodos)
            // Clear the form after successful submission
            setTitle("");
            router.push("/");
          } catch (error) {
            setErrors({ ...errors, form: error.message });
            setIsLoading(false);
          }
        }
      };

    return ( 
        <div className="container mx-auto w-full sm:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Add Post</h2>
            <form onSubmit={handleSubmit} noValidate>
                {/* Title Input */}
                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className={`w-full px-3 py-2 mt-1 text-gray-700 border-2 rounded-lg focus:outline-none ${
                        errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                </div>

                {/* Body Input */}
                <div className="mb-4">
                <label htmlFor="body" className="block font-medium text-gray-700">
                    Body
                </label>
                <textarea
                    id="body"
                    rows="4"
                    className={`w-full px-3 py-2 mt-1 text-gray-700 border-2 rounded-lg focus:outline-none ${
                    errors.body ? "border-red-500" : "border-gray-300"
                    }`}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                    {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
                </div>

                {/* Form Error */}
                {errors.form && (
                <p className="text-red-500 text-sm mb-4">{errors.form}</p>
                )}

                        
                <button
                type="submit"
                className="py-3 w-full text-white flex justify-center bg-black rounded hover:bg-gray-800 focus:outline-none"
                >
                Add Post
                </button>
        </form>
    </div>
     );
}
 
export default AddForm;