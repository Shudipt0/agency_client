"use client"

import * as React from "react"
import {
  ColumnDef,
 
} from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteProject } from "@/app/actions/service/projects"
import Image from "next/image"






// Define the Services type if not already defined or import it from the correct location
type Projects = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string
};

export const columns: ColumnDef<Projects>[] = [
 {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize text-start">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "title",
  header: "Title",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
  header: "Description",
    cell: ({ row }) => <div className="capitalize text-start">
        {/* Display only the first three words of the description */}
        {(row.getValue("description") as string)
          .split(" ")
          .slice(0, 3)
          .join(" ")}
    </div>,
  },
   {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="">
        <Image
          src={row.getValue("image")}
          alt={row.getValue("image")}
          width={50}
          height={50}
          className="object-cover w-[50px] h-[50px] rounded"
        />
      </div>
    ),
  },
  {
    accessorKey: "link",
  header: "Link",
    cell: ({ row }) => <div className="capitalize text-start">
        {/* Display only the first three words of the link */}
        {(row.getValue("link") as string)
          .split(" ")
          .slice(0, 3)
          .join(" ")}
    </div>,
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const service = row.original
// delete item
      const handleDelete = async () =>{
        const id = row.getValue("id")
        const deleteItem = await deleteProject(id)
      }

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
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/projects/${row.getValue('id')}/view`)} >
              View Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/projects/${row.getValue('id')}/edit`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]