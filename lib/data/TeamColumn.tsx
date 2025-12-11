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

import { deleteTeamMember } from "@/app/actions/service/team"
import Image from "next/image"




// Define the Services type if not already defined or import it from the correct location
type TeamMember = {
  id: string;
  name: string;
  profession: string;
  bio_data: string;
  image: string;
};

export const columns: ColumnDef<TeamMember>[] = [
 {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize text-start">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "profession",
  header: "Profession",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("profession")}</div>,
  },
  {
    accessorKey: "bio_data",
  header: "Bio-data",
    cell: ({ row }) => <div className="capitalize text-start">
        {/* Display only the first three words of the description */}
        {(row.getValue("bio_data") as string)
          .split(" ")
          .slice(0, 3)
          .join(" ")}
    </div>,
  },
   {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="capitalize">
        <Image
          src={row.getValue("image")}
          alt={row.getValue("name")}
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
        const deleteItem = await deleteTeamMember(id)
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
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/team/${row.getValue('id')}/view`)} >
              View Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/team/${row.getValue('id')}/edit`)}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]