"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Application = {
    id: string
    dateApplied: Date
    title: string
    company: string
    salary: number
    url: string
    stage: "applied" | "phone-screen" | "technical-challenge" | "offer-negotiation"
    status: "open" | "rejection"
    contacts: string[]
    dateUpdated: Date
}

export const columns: ColumnDef<Application>[] = [
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "stage",
        header: "Stage",
    },
    {
        accessorKey: "salary",
        header: () => <div className="text-right">Salary</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("salary"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "url",
        header: "URL",
    },
    {
        accessorKey: "stage",
        header: "Stage",
    },
    {
        accessorKey: "contacts",
        header: "Contacts",
    },
    {
        accessorKey: "dateUpdated",
        header: "Date Updated",
    },
]