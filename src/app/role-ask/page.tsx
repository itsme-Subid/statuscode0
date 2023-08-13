"use client";

import { setCookie } from "@/components/cookie";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Role = () => {
  const setRole = (role: string) => {
    setCookie("role", role, 30);
    switch (role) {
      case "user":
        window.location.href = "/dashboard";
        break;
      case "seller":
        window.location.href = "/seller";
        break;
      case "doctor":
        window.location.href = "/doctor";
        break;
      default:
        window.location.href = "/";
        break;
    }
  };
  return (
    <form className="h-screen grid place-content-center gap-4">
      <Label htmlFor="name">Select your role</Label>
      <Select onValueChange={setRole}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="seller">Seller</SelectItem>
            <SelectItem value="doctor">Doctor</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </form>
  );
};

export default Role;
