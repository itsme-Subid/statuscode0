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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderIcon } from "@/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import zod from "zod";
import Dropzone from "@/components/dropzone";
import { useUploadFile } from "react-firebase-hooks/storage";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { useDocument } from "react-firebase-hooks/firestore";

export const formSchema = zod.object({
  name: zod.string().nonempty(),
  degree: zod.string().nonempty(),
  speciality: zod.string().nonempty(),
  address: zod.string().nonempty(),
  phone: zod.string().nonempty(),
  fees: zod.string(),
});

export type FormValues = zod.infer<typeof formSchema>;

const UpdateProfile = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadFile] = useUploadFile();
  const [value] = useDocument(doc(db, "doctors", localStorage.getItem("uid")!));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const handleEditProfile = async (data: FormValues) => {
    setLoading(true);
    if (!selectedImage) {
      toast({
        title: "Error",
        description: "Please select an image",
      });
      setLoading(false);
      return;
    }
    try {
      const imageRef = storageRef(storage, `profile/${uuid()}`);
      const result = await uploadFile(imageRef, selectedImage, {
        contentType: selectedImage?.type,
      });
      const url = await getDownloadURL(result?.ref!);
      const profile = {
        ...data,
        image: url,
      };
      await addDoc(collection(db, "doctors"), profile);
      toast({
        title: "Profile Updated",
        description: "Profile has been updated successfully",
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Profile could not be updated",
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
        <div className="avatar cursor-pointer">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={
              value?.data()?.image ||
              "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
            }
            alt=""
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-h-screen sm:max-w-[80rem]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Fill in the form below to edit your profile
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleEditProfile)}>
          <div className="columns-2 py-4">
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.name || ""}
                placeholder="John Doe"
                className="col-span-3"
                {...register("name")}
                title={errors.name?.message}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Speciality
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.speciality || ""}
                placeholder="Dentist"
                className="col-span-3"
                {...register("speciality")}
                title={errors.speciality?.message}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Degree
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.degree || ""}
                placeholder="MBBS"
                className="col-span-3"
                {...register("degree")}
                title={errors.degree?.message}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="text-balance text-right leading-normal"
              >
                Address
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.address || ""}
                placeholder="123, Street, City, Country"
                className="col-span-3"
                {...register("address")}
                title={errors.address?.message}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Phone
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.phone || ""}
                placeholder="+91 1234567890"
                className="col-span-3"
                {...register("phone")}
                title={errors.phone?.message}
              />
            </div>
            <div className="mb-4 grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Fees
              </Label>
              <Input
                id="name"
                defaultValue={value?.data()?.fees}
                placeholder="2000"
                className="col-span-3"
                {...register("fees")}
                title={errors.fees?.message}
              />
            </div>
            {(selectedImage || !!value?.data()?.image) && (
              <div className="mb-4 grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Profile pic
                </Label>
                <div className="col-span-3">
                  <img
                    src={
                      (selectedImage && URL.createObjectURL(selectedImage)) ||
                      value?.data()?.image
                    }
                    alt="preview"
                    className="aspect-video max-w-xs rounded-lg object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          <Dropzone onDrop={handleDrop} />
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading && <LoaderIcon className="mr-2" />}
              <span>Apply Changes</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
