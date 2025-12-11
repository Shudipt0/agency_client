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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"






// Define the Services type if not already defined or import it from the correct location
type UserContact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const columns: ColumnDef<UserContact>[] = [
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
    accessorKey: "email",
  header: "E-mail",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
  header: "Phone",
    cell: ({ row }) => <div className="capitalize text-start">{row.getValue("phone")}</div>,
  },
   {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="capitalize text-start">
          {/* Display only the first three words of the description */}
        {(row.getValue("message") as string)
          .split(" ")
          .slice(0, 3)
          .join(" ")}
      </div>
    ),
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const contact = row.original

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
            <DropdownMenuItem onClick={()=> (window.location.href = `/admin/userContact/${row.getValue('id')}`)} >
              View Details
            </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]