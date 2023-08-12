import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const symptoms: string[] = [
  "itching",
  "skin rash",
  "nodal skin eruptions",
  "continuous sneezing",
  "shivering",
  "chills",
  "joint pain",
  "stomach pain",
  "acidity",
  "ulcers on tongue",
  "muscle wasting",
  "vomiting",
  "burning micturition",
  "spotting urination",
  "fatigue",
  "weight gain",
  "anxiety",
  "cold hands and feets",
  "mood swings",
  "weight loss",
  "restlessness",
  "lethargy",
  "patches in throat",
  "irregular sugar level",
  "cough",
  "high fever",
  "sunken eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish skin",
  "dark urine",
  "nausea",
  "loss of appetite",
  "pain behind the eyes",
  "back pain",
  "constipation",
  "abdominal pain",
  "diarrhoea",
  "mild fever",
  "yellow urine",
  "yellowing of eyes",
  "acute liver failure",
  "fluid overload",
  "swelling of stomach",
  "swelled lymph nodes",
  "malaise",
  "blurred and distorted vision",
  "phlegm",
  "throat irritation",
  "redness of eyes",
  "sinus pressure",
  "runny nose",
  "congestion",
  "chest pain",
  "weakness in limbs",
  "fast heart rate",
  "pain during bowel movements",
  "pain in anal region",
  "bloody stool",
  "irritation in anus",
  "neck pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen legs",
  "swollen blood vessels",
  "puffy face and eyes",
  "enlarged thyroid",
  "brittle nails",
  "swollen extremeties",
  "excessive hunger",
  "extra marital contacts",
  "drying and tingling lips",
  "slurred speech",
  "knee pain",
  "hip joint pain",
  "muscle weakness",
  "stiff neck",
  "swelling joints",
  "movement stiffness",
  "spinning movements",
  "loss of balance",
  "unsteadiness",
  "weakness of one body side",
  "loss of smell",
  "bladder discomfort",
  "foul smell ofurine",
  "continuous feel of urine",
  "passage of gases",
  "internal itching",
  "toxic look (typhos)",
  "depression",
  "irritability",
  "muscle pain",
  "altered sensorium",
  "red spots over body",
  "belly pain",
  "abnormal menstruation",
  "dischromic patches",
  "watering from eyes",
  "increased appetite",
  "polyuria",
  "family history",
  "mucoid sputum",
  "rusty sputum",
  "lack of concentration",
  "visual disturbances",
  "receiving blood transfusion",
  "receiving unsterile injections",
  "coma",
  "stomach bleeding",
  "distention of abdomen",
  "history of alcohol consumption",
  "blood in sputum",
  "prominent veins on calf",
  "palpitations",
  "painful walking",
  "pus filled pimples",
  "blackheads",
  "scurring",
  "skin peeling",
  "silver like dusting",
  "small dents in nails",
  "inflammatory nails",
  "blister",
  "red sore around nose",
  "yellow crust ooze",
  "prognosis",
];

const Combobox = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (arg0: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="justify-between">
          {value
            ? symptoms.find((symptom) => symptom === value)
            : "Select symptom..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search symptom..." />
          <CommandEmpty>No symptom found.</CommandEmpty>
          <CommandGroup>
            {symptoms.map((symptom) => (
              <CommandItem
                key={symptom}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === symptom ? "opacity-100" : "opacity-0"
                  )}
                />
                {symptom}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
