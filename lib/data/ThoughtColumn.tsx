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
import { deleteThought } from "@/app/actions/service/thought"
import Image from "next/image"






// Define the Services type if not already defined or import it from the correct location
type Thoughts = {
  id: string;
  serviceName: string;
  description: string;
  image: string;
};

export const columns: ColumnDef<Thoughts>[] = [
 {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "experts_name",
    header: "Experts Name",
    cell: ({ row }) => (
      <div className="capitalize text-start">{row.getValue("experts_name")}</div>
    ),
  },
  
  {
    accessorKey: "bio_data",
  header: "Bio-Data",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("bio_data")}</div>,
  },
  {
    accessorKey: "thought",
    header: "Thought",
    cell: ({ row }) => (
      <div className="capitalize text-start">
          {/* Display only the first three words of the description */}
        {(row.getValue("thought") as string)
          .split(" ")
          .slice(0, 3)
          .join(" ")}
      </div>
    ),
  },
   {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="capitalize">
        <Image
          src={row.getValue("image")}
          alt={row.getValue("image")}
          width={50}
          height={50}
        />
      </div>
    ),
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const service = row.original
// delete item
      const handleDelete = async () =>{
        const id = row.getValue("id")
        const deleteItem = await deleteThought(id)
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
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/thought/${row.getValue('id')}/view`)} >
              View Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/thought/${row.getValue('id')}/edit`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]