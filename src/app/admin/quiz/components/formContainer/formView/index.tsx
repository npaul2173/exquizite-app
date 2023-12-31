import { FormInputField } from "@/components/formFields/FormInputField";
import { FormNumberInputField } from "@/components/formFields/FormNumberInputField";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { FormDataTypes } from "../schema";

import {
  FileAmountLimitValidator,
  FileSizeValidator,
  FileTypeValidator,
} from "use-file-picker/validators";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TopicSelector } from "./Topic";
import { Button } from "@/components/ui/button";
import { PlusIcon, SunIcon } from "@radix-ui/react-icons";

export function FormView() {
  const { control } = useFormContext<FormDataTypes>(); // retrieve all hook methods
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const { openFilePicker, filesContent, loading, errors } = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    validators: [
      new FileAmountLimitValidator({ max: 1 }),
      new FileTypeValidator(["jpg", "jpeg", "png"]),
      new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ }),
    ],
  });
  console.log("filesContent---> ", filesContent);

  // useEffect(() => {
  //   if (filesContent && filesContent.length > 0) {
  //     const file = filesContent[0];
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setCoverImage(String(reader.result)); // Store the base64 data
  //     };
  //   }
  // }, [filesContent]);

  console.log(coverImage);

  return (
    <div className="max-w-xl mx-auto  space-y-8">
      {/* <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio> */}

      <Button
        onClick={() => openFilePicker()}
        variant="outline"
        className="justify-start space-x-2"
        // onClick={() => route.push("/admin/quiz")}
      >
        <PlusIcon /> <p className="bold"> Cover photo</p>
      </Button>

      {filesContent && !!filesContent.length && (
        // eslint-disable-next-line @next/next/no-img-element
        <Image
          src={filesContent[0].content}
          alt="Cover Image"
          width={480}
          height={270} // Maintain 16:9 aspect ratio
          className="ml-4 object-cover rounded-lg"
          // layout="fill"
        />
      )}
      <TopicSelector />
      <FormInputField
        name="title"
        control={control}
        placeHolder="Enter title"
        label="Title"
      />

      <FormInputField
        name="description"
        label="Description"
        control={control}
        placeHolder="Enter description"
      />

      <FormNumberInputField
        label="Duration( In minutes)"
        name="duration"
        control={control}
        placeHolder="Enter duration"
      />

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
    </div>
  );
}
