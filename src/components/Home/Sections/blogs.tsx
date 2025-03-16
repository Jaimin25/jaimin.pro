"use client";

import { fetchBlogs } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blogs({ className }: React.ComponentProps<"div">) {
  const [blogs, setBlogs] =
    useState<(PageObjectResponse | DatabaseObjectResponse)[]>();
  const [isFetchingBlogs, setIsFetchingBlogs] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await fetchBlogs();
      setBlogs(data);
      setIsFetchingBlogs(false);
    })();
  }, []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Blogs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {!isFetchingBlogs ? (
            blogs &&
            blogs.slice(0, 1).map((blog) => {
              const createdAt = new Date(blog.created_time);
              const formattedDate = createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <Link
                  href={blog.public_url!}
                  target="_blank"
                  className="group"
                  key={blog.id}
                >
                  <div className="flex gap-2 truncate">
                    <div>
                      <p className="group-hover:underline">
                        {blog.properties.Name.type == "title" &&
                          blog.properties.Name.title.map((i) => i.plain_text)}
                      </p>
                      <span className="text-muted-foreground text-sm">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3.5 w-1/4" />
            </>
          )}
          <div className="w-full text-center">
            <Link
              href="https://jaiminn.notion.site/18f9dd7317f9808c89d0eeb1f73bae61?v=18f9dd7317f98018acff000cfcdb8901"
              target="_blank"
            >
              <Button variant={"outline"} className="cursor-pointer">
                More
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
