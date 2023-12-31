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
  ImageDimensionsValidator,
} from "use-file-picker/validators";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TopicSelector } from "./Topic";
import { Button } from "@/components/ui/button";
import { PlusIcon, SunIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormTextarea } from "@/components/formFields/FormTextArea";

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
      new ImageDimensionsValidator({ maxHeight: 800, maxWidth: 1200 }),
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
        // onClick={() => route.push("/admin/quiz")}
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
        label="Description Long"
        control={control}
        placeHolder="Enter description"
      />

      <FormNumberInputField
        label="Duration( In minutes)"
        name="duration"
        control={control}
        placeHolder="Enter duration"
      />
    </div>
  );
}
