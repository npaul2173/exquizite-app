"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSearchParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const data: QuizType[] = [
  {
    _id: "6571fa798a84135cea498c78",
    title: "change",
    topic: "CSS",
    tags: ["Web Development", "Styling", "Frontend"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description: "Test your knowledge of basic CSS concepts with this quiz.",
  },
  {
    _id: "6571fb9348e8ecb8d1e8a90a",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "6571fba77937f128d98cba8e",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "657204c2859ed8d44f05fdba",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "65720501096a3c2ae50c6885",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "6572052eb45ee36e6c79817a",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "657206b888d86a55d22f4e19",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "657207320210ba3bf42c0e72",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "657209459be14cc4e0917920",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "657209e377a044426226ea82",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "65720f9f70c828b24100ace0",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
  {
    _id: "65720fdc70c828b24100ace7",
    title: "Python Fundamentals Quiz 2",
    topic: "Python",
    tags: ["Python", "Programming", "Fundamentals"],
    coverImage: "https://npauldev.in/ProfilePictureHD.959b411b.webp",
    description:
      "Test your knowledge of Python programming fundamentals with this quiz.",
  },
];

export type QuizType = {
  _id: string;
  coverImage: string;
  tags: string[];
  title: string;
  topic: string;
  description: string;
};

export const columns: ColumnDef<QuizType>[] = [
  {
    accessorKey: "coverImage",
    header: "Cover Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.getValue("coverImage")} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "topic",
    header: "Topic",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("topic")}</div>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      let tags: string[] = row.getValue("tags");
      return (
        <div className="flex gap-1 flex-wrap">
          {tags.map((item, index) => (
            <Badge key={index} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <CaretSortIcon className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  // },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

export default function SearchResult() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = React.useState<string | null>();

  React.useEffect(() => {
    if (searchParams?.get("search")?.length) {
      setSearchValue(searchParams?.get("search"));
      table.getColumn("title")?.setFilterValue(searchParams?.get("search"));
    }
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter quiz..."
          value={searchValue ?? ""}
          onChange={(event) => {
            {
              setSearchValue(event.target.value);
              table.getColumn("title")?.setFilterValue(event.target.value);
            }
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
