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
import { LoaderIcon } from "@/icons";
import { FormEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { db } from "@/firebase";
import { useToast } from "@/components/ui/use-toast";
import { useAuth0 } from "@auth0/auth0-react";

const RequestMeet = ({ id }: { id: string }) => {
  const { user, isLoading } = useAuth0();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const handleMedicine = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const request = {
      date: date?.getTime(),
      doctorId: id,
      status: "pending",
      userId: user?.email,
      name: user?.name,
    };
    try {
      await addDoc(collection(db, "requests"), request);
      toast({
        title: "Success",
        description: "Request sent successfully",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please Provide a Date!",
      });
    }

    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          title="Add Notification"
          className="add rounded-2xl border-transparent p-2 transition-colors bg-slate-100/50 hover:bg-slate-500/10"
        >
          Book a Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle>Schedule a Meet</DialogTitle>
          <DialogDescription>
            Pick a date schedule a meet with the doctor.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleMedicine}>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="text-right leading-normal"
              ></Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading || isLoading}>
              {loading && <LoaderIcon className="mr-2" />}
              <span>Schedule Meet</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestMeet;
