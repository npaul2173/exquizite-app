"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="flex justify-between ">
        {/* <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
          What will you quiz today ?
        </h2> */}

        <h1 className="text-2xl font-bold tracking-tight">
          What will you quiz today ?
        </h1>
        <div className="flex w-full max-w-sm space-x-2 pr-10">
          <Input
            placeholder="Search quiz"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button
            type="submit"
            onClick={() => router.push(`/admin/searchquiz?search=${search}`)}
          >
            Search
          </Button>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-center w-full px-4 py-8 ">
          <div className="w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 focus:outline-none  h-20"
            />
          </div>
        </div>
      </div> */}

      {/* <div className="bg-primary block h-300 w-300"></div> */}
      {/* <div className="w-80 h-90 bg-primary rounded-md shadow-md"></div> */}
    </div>
  );
};
