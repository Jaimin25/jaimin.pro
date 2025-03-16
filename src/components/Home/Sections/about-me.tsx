import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { RESUME } from "@/lib/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutMe({ className }: React.ComponentProps<"div">) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>{RESUME.about}</CardContent>
      <CardFooter>
        <div className="flex gap-2">
          {RESUME.contact.social.map((item, index) => (
            <Link href={item.url} target="_blank" key={index}>
              <Button
                variant={"outline"}
                className="cursor-pointer
              "
              >
                <item.icon />
              </Button>
            </Link>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
