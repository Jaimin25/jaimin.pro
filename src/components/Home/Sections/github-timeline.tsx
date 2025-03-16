import GitHubCalendar from "react-github-calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "@/lib/utils";

export default function GithubTimeline({
  className,
}: React.ComponentProps<"div">) {
  return (
    <Card className={cn("justify-center", className)}>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="justify-items-center">
        <GitHubCalendar
          username="jaimin25"
          colorScheme="light"
          theme={{
            light: ["#1b1b1b", "#059669", "#10b981", "#34d399", "#6ee7b7"],
          }}
        />
      </CardContent>
    </Card>
  );
}
