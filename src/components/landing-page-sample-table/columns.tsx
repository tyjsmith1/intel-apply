"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"

export type Application = {
    id: string
    dateApplied: Date
    title: string
    company: string
    salary: number
    url: string
    stage: "Applied" | "Phone Screen" | "Technical Challenge" | "Offer Negotiation"
    status: "Open" | "Closed"
    // contacts: string[]
    dateUpdated: Date
}

export const columns: ColumnDef<Application>[] = [
    {
        id: "select",
        header: ({ table }) => (<Checkbox aria-label="Select all"/>),
        cell: () => <Checkbox aria-label="Select row" />,
    },
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
        cell: ({ row }) => {
            const status = row.getValue("status")
            let emoji = ""
            if (status === "Open") {
                emoji = "🟢"
            } else if (status === "Closed") {
                emoji = "🔴"
            }
            return `${emoji} ${status}`
        }
    },
    {
        accessorKey: "stage",
        header: "Stage",
        cell: ({ row }) => {
            const stage = row.getValue("stage");
            let emoji = "";
            if (stage === "Accepted") {
                emoji = "✅";
            } else if (stage === "Applied") {
                emoji = "📄";
            } else if (stage === "Phone Screen") {
                emoji = "📞";
            } else if (stage === "Technical Challenge") {
                emoji = "💻";
            } else if (stage === "Offer Negotiation") {
                emoji = "💼";
            }
            return `${emoji} ${stage}`;
        },
    },
    {
        accessorKey: "salary",
        header: () => <div className="text-right">Salary</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("salary"))
            const roundToDollar = Math.round(amount)
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(roundToDollar)

            return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: "url",
        header: "URL",
    },
    // {
    //     accessorKey: "contacts",
    //     header: "Contacts",
    // },
    {
        accessorKey: "dateUpdated",
        header: "Date Updated",
    },
]