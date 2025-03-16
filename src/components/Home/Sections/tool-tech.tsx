import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { RESUME } from "@/lib/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ToolsAndTech({
  className,
}: React.ComponentProps<"div">) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Tools and Tech</CardTitle>
      </CardHeader>
      <CardContent className="justify-items-center p-0">
        <div className="flex flex-wrap gap-2 justify-center">
          {RESUME.tools_and_tech.map((item) => (
            <TooltipProvider key={item}>
              <Tooltip>
                <TooltipTrigger>
                  <img src={`https://skillicons.dev/icons?i=${item}`} />
                </TooltipTrigger>
                <TooltipContent>{item.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
