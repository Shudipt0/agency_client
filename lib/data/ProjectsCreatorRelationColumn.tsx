"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import { deleteProject_creator } from "@/app/actions/project_creators/create";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define the Services type if not already defined or import it from the correct location
type Project_Creators = {
  id: string;
  title: string;
  name: string;
};

export const columns: ColumnDef<Project_Creators>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="capitalize text-start pl-2">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Product Title",
    cell: ({ row }) => (
      <div className="capitalize text-start">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Creator Name",
    cell: ({ row }) => (
      <div className="capitalize text-start">
        {/* Display only the first three words of the name */}
        {row.getValue("name") as string}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const service = row.original;
      // delete item
      const handleDelete = async () => {
        const id = row.getValue("id") as string;
        const deleteItem = await deleteProject_creator(id);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
