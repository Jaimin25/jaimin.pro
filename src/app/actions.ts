"use server";

import {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function fetchBlogs() {
  try {
    const response = await notion.databases.query({
      database_id: "18f9dd7317f9808c89d0eeb1f73bae61",
    });
    const data = response.results as (
      | PageObjectResponse
      | DatabaseObjectResponse
    )[];

    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
}
