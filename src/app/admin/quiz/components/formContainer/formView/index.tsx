import { FormInputField } from "@/components/formFields/FormInputField";
import { useForm, useFormContext } from "react-hook-form";
import { FormDataTypes, FormSchema } from "../schema";

export function FormView() {
  const { control } = useFormContext<FormDataTypes>(); // retrieve all hook methods

  // const { control } = useForm<FormDataTypes>();
  return (
    <div className="max-w-xl mx-auto">
      {/* ... existing fields ... */}
      <FormInputField name="title" control={control} />

      <FormInputField name="description" control={control} />

      <FormInputField name="duration" control={control} />

      {/* <label htmlFor="coverImage" className="block font-semibold text-lg mb-2">
        Cover Image:
      </label>
      <input
        type="file"
        id="coverImage"
        name="coverImage"
        accept="image/*"
        // onChange={(e) =>
        //   setQuizDetails({ ...quizDetails, coverImage: e.target.files[0] })
        // }
        className="w-full border rounded p-2 mb-4"
      /> */}

      {/* <label htmlFor="description" className="block font-semibold text-lg mb-2">
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        value={quizDetails.description}
        // onChange={handleChange}
        className="w-full border rounded p-2 mb-4"
      /> */}

      {/* <label htmlFor="duration" className="block font-semibold text-lg mb-2">
        Duration (minutes):
      </label>
      <input
        type="number"
        id="duration"
        name="duration"
        value={quizDetails.duration}
        // onChange={handleChange}
        className="w-full border rounded p-2 mb-4"
        min="1"
      /> */}

      {/* <label htmlFor="isPublished" className="block font-semibold text-lg mb-2">
        Publish Quiz:
      </label>  */}

      {/* <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={!Object.values(quizDetails).every((field) => !!field)}
      >
        Create Quiz
      </button> */}
    </div>
  );
}
