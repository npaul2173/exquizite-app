import { FormInputField } from "@/components/formFields/FormInputField";
import { FormNumberInputField } from "@/components/formFields/FormNumberInputField";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useFilePicker } from "use-file-picker";
import { FormDataTypes } from "../schema";

import { FormTextarea } from "@/components/formFields/FormTextArea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  FileAmountLimitValidator,
  FileSizeValidator,
  FileTypeValidator,
  ImageDimensionsValidator,
} from "use-file-picker/validators";
import { SelectTags } from "./SelectTags";
import { TopicSelector } from "./Topic";

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
      // new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ }),
      // new ImageDimensionsValidator({ maxHeight: 800, maxWidth: 1200 }),
    ],
  });

  return (
    <div className="max-w-xl mx-auto  space-y-8">
      {filesContent && !!filesContent.length && (
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={filesContent[0].content}
            alt="Cover Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      )}

      <Button
        onClick={() => openFilePicker()}
        variant="outline"
        className="justify-start space-x-2"
      >
        <PlusIcon /> <p className="bold"> Cover photo</p>
      </Button>

      <TopicSelector />
      <FormInputField
        name="title"
        control={control}
        placeHolder="Enter title"
        label="Title"
      />

      <FormTextarea
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
      <SelectTags />
    </div>
  );
}
