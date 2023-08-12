/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AddIcon, LoaderIcon } from "@/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import zod from "zod";
import Dropzone from "@/components/dropzone";
import { useUploadFile } from "react-firebase-hooks/storage";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { Input } from "@/components/ui/input";

export const formSchema = zod.object({
  name: zod.string().nonempty({ message: "Name is required" }),
  description: zod.string().nonempty({ message: "Description is required" }),
  price: zod.string().nonempty({ message: "Price is required" }),
});

export type FormValues = zod.infer<typeof formSchema>;

const AddMedicine = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadFile] = useUploadFile();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const handleMedicine = async (data: FormValues) => {
    setLoading(true);
    if (!selectedImage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select an image",
      });
      setLoading(false);
      return;
    }
    try {
      const imageRef = storageRef(storage, `medicine/${uuid()}`);
      const result = await uploadFile(imageRef, selectedImage, {
        contentType: selectedImage?.type,
      });
      const url = await getDownloadURL(result?.ref!);
      const medicine = {
        ...data,
        image: url,
      };
      await addDoc(collection(db, "medicines"), medicine);
      toast({
        title: "Medicine Added",
        description: "Medicine has been added successfully",
      });
      setOpen(false);
    } catch (error) {
      console.warn(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong, please try again later",
      });
    } finally {
      setLoading(false);
    }
  };
  const handleDrop = (files: File[]) => {
    if (files.length > 1) {
      toast({
        title: "Error",
        description: "You can only upload one file at a time",
      });
      return;
    }
    const maxSize = 5 * 1024 * 1024;
    const file = files[0];
    if (file.size > maxSize) {
      toast({
        title: "Error",
        description: "File size exceeds 5MB",
      });
      return;
    }
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg"
    ) {
      toast({
        title: "Error",
        description: "File type must be png, jpg or jpeg",
      });
      return;
    }
    setSelectedImage(file);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          title="Add Notification"
          className="add rounded-lg border-transparent bg-transparent p-2 transition-colors hover:bg-slate-500/10"
        >
          <AddIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle>Add Medicine</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a Medicine
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleMedicine)}>
          <div className="grid grid-cols-2 gap-4 py-4">
            {selectedImage && (
              <div className="col-span-2 grid grid-cols-8 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Image
                </Label>
                <div className="col-span-7">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="preview"
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right leading-normal">
                Medicine Name
              </Label>
              <Input
                className="col-span-3 resize-none"
                placeholder="Video Course Link"
                title={errors.name?.message}
                {...register("name")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Medicine Price
              </Label>
              <Input
                className="col-span-3 resize-none"
                placeholder="Video Course Link"
                title={errors.price?.message}
                {...register("price")}
              />
            </div>
            <div className="col-span-2 grid grid-cols-6 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Medicine Description
              </Label>
              <Input
                className="col-span-5 resize-none"
                placeholder="Video Course Link"
                title={errors.description?.message}
                {...register("description")}
              />
            </div>
          </div>
          <Dropzone onDrop={handleDrop} />
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <LoaderIcon className="mr-2" />}
              <span>Add Medicine</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicine;
