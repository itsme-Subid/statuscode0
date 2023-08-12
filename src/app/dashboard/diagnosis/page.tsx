"use client";

import Combobox from "@/components/combobox";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Diagnosis = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <Topbar title="Disease Diagnosis" />
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="select-group flex gap-2 flex-col">
          <Label>First Symptom</Label>
          <Combobox value={value} setValue={setValue} />
        </div>
        <div className="select-group flex gap-2 flex-col">
          <Label>Second Symptom</Label>
          <Combobox value={value1} setValue={setValue1} />
        </div>
        <div className="select-group flex gap-2 flex-col">
          <Label>Third Symptom</Label>
          <Combobox value={value2} setValue={setValue2} />
        </div>
        <div className="select-group flex gap-2 flex-col">
          <Label>Fourth Symptom</Label>
          <Combobox value={value3} setValue={setValue3} />
        </div>
        <Button
          className="ml-auto col-start-2"
          onClick={() => {
            console.log([value, value1, value2, value3]);
          }}
        >
          Analyze
        </Button>
      </div>
    </>
  );
};

export default Diagnosis;
