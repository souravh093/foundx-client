"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { AddIcon, TrashIcon } from "@/src/assets/icons";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import { dateToISO } from "@/src/utils/dateToISO";
import FXSelect from "@/src/components/form/FXSelect";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/src/hooks/categories.hook";
import FXTextarea from "@/src/components/form/FXTextarea";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import { Spinner } from "@nextui-org/spinner";
import generateDescription from "@/src/services/ImageDescription";

const cityOptions = allDistict()
  .sort()
  .map((city: string) => ({
    key: city,
    label: city,
  }));

const CreatePostProfile = () => {
  const [loading, setLoading] = useState(false);
  const { mutate: handleCreatePost, isPending: createPostPending } =
    useCreatePost();
  const { user } = useUser();
  const [imageFile, setImageFile] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const { data: categories, isLoading, isSuccess } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categories?.data && !isLoading) {
    categoryOptions = categories.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category?._id,
        label: category?.name,
      }));
  }

  const methods = useForm({});
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { name: string; value: string }) => question.value
      ),
      dateFound: dateToISO(data.dateFound),
      user: user?._id,
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of imageFile) {
      formData.append("itemImages", image);
    }

    handleCreatePost(formData);
    console.log(formData.get("data"));
    console.log(formData.get("itemsImages"), "images");
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const handleImageChange: SubmitHandler<FieldValues> = (e) => {
    const file = e.target.files[0];

    setImageFile((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionGeneration = async () => {
    setLoading(true);
    try {
      const res = await generateDescription(
        imagePreviews[0],
        "write a description for social media post given the image found this item"
      );

      methods.setValue("description", res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {createPostPending && (
        <div className="bg-black/10 h-screen flex items-center justify-center fixed inset-0 z-[999] backdrop-blur-md">
          <Spinner size="lg" color="primary" />
        </div>
      )}
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  isDisabled={!isSuccess}
                  label="Category"
                  name="category"
                  options={categoryOptions}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                  htmlFor="image"
                >
                  Upload image
                </label>
                <input
                  multiple
                  className="hidden"
                  id="image"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
            </div>

            {imagePreviews.length > 0 && (
              <div className="flex gap-5 my-5 flex-wrap">
                {imagePreviews.map((imageDataUrl) => (
                  <div
                    key={imageDataUrl}
                    className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2"
                  >
                    <img
                      alt="item"
                      className="h-full w-full object-cover object-center rounded-md"
                      src={imageDataUrl}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextarea label="Description" name="description" />
              </div>
            </div>

            <div className="flex justify-end gap-5">
              {methods.getValues("description") && (
                <Button onClick={() => methods.resetField("description")}>
                  Clear
                </Button>
              )}
              <Button
                isDisabled={imagePreviews.length > 0 ? false : true}
                isLoading={isLoading}
                onClick={() => handleDescriptionGeneration()}
              >
                {isLoading ? "Generating...." : "Generate with AI"}
              </Button>
            </div>

            <Divider className="my-5" />

            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl">Owner verification questions</h1>
              <Button isIconOnly onClick={() => handleFieldAppend()}>
                <AddIcon />
              </Button>
            </div>

            <div className="space-y-5">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <FXInput label="Question" name={`questions.${index}.value`} />
                  <Button
                    isIconOnly
                    className="h-14 w-16"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </Button>
                </div>
              ))}
            </div>

            <Divider className="my-5" />
            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Post
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreatePostProfile;
