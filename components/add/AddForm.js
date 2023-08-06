"use client";
import React from "react";
import { useRouter } from "next/navigation"
import { POST } from "@/app/api/todos/route";

const AddForm = () => {

    const router = useRouter();
    const [userid, setUserid] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [errors, setErrors] = React.useState({ title: "", form: "" });

    const validateInput = (input, rule) => {
        // TODO: Validate input based on rule
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const titleError = validateInput(title, "title");
        const idError = validateInput(userid, "id")

        if (titleError || idError) {
          setErrors({ ...errors, title: titleError, userid: idError, form: "" });
        } else {
          setErrors({ title: "", userid: "", form: "" });
    
          try {
            const newTodos = {
              userid,
              title,
            };
    
            await POST(newTodos);
            // Clear the form after successful submission
            setUserid("");
            setTitle("");
            router.push("/add");
          } catch (error) {
            setErrors({ ...errors, form: error.message });
          }
        }
      };

    return ( 
        <div className="container mx-auto w-full sm:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Add Post</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="my-4">
                  <label htmlFor="userId" className="block font-medium text-gray-700">
                    id
                  </label>
                  <input
                    type="text"
                    id="userid"
                    className={`w-full px-3 py-2 mt-1 text-gray-700 border-2 rounded-lg focus:outline-none ${
                    errors.title ? "border-red-500" : "border-gray-300"
                    }`}
                    value={userid}
                    onChange={(e) => setUserid(e.target.value)}
                    required />
                </div>
                {errors.userid && <p className="text-red-500 text-sm">{errors.userid}</p>}

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