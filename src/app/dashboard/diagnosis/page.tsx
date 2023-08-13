"use client";

import Combobox from "@/components/combobox";
import Topbar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const Diagnosis = () => {
  const { toast } = useToast();
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [disease, setDisease] = useState("");
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
        <div className="select-group flex gap-2 flex-col">
          <Label>Fifth Symptom</Label>
          <Combobox value={value4} setValue={setValue4} />
        </div>
        <div className="select-group flex gap-2 flex-col">
          <Label>Sixth Symptom</Label>
          <Combobox value={value5} setValue={setValue5} />
        </div>
        <div className="select-group flex gap-2 flex-col">
          <Label>Seventh Symptom</Label>
          <Combobox value={value6} setValue={setValue6} />
        </div>
        <Button
          className="ml-auto col-start-2"
          onClick={async () => {
            const axios = require("axios");
            const url = "http://127.0.0.1:5000/predict";
            const data = {
              symptoms: [value, value1, value2, value3, value4, value5, value6],
            };

            try {
              const res = await axios.post(url, data);
              setDisease(res.data.prediction);
              toast({
                title: "Success",
                description: "Disease has been diagnosed",
              });
            } catch (error) {
              console.error(error);
              toast({
                title: "Error",
                description: "Something went wrong",
              });
            }
          }}
        >
          Analyze
        </Button>
        {disease && (
          <div className="col-span-2">
            <Label>Disease</Label>
            <p className="text-2xl">{disease}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Diagnosis;
