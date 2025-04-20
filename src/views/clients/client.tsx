import { Button } from "@/components/ui/button"
import {
  Card,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { mockClientData } from "../../../mocks/client"
import { Client } from "types/client"
import { useEffect, useState } from "react"

const statusMap: Record<string, Client["medical_status"]> = {
  "active": "Active",
  "pending": "Pending",
  "in-progress": "In Progress",
}

const Clients = () => {
  const [selectedStatus, setSelectedStatus] = useState("")
  const [filteredData, setFilteredData] = useState<Client[]>([])


  useEffect(() => {
    const dataFiltered = selectedStatus
    ? mockClientData.filter(client => client.medical_status === statusMap[selectedStatus])
    : mockClientData

    setFilteredData(dataFiltered)
  }, [selectedStatus])


  return (
    <Card className="container-page p-4" >
      <div className='flex justify-between' >
        <h1 className="text-4xl">clients</h1>
        <Input className="max-w-3xs" placeholder="Client to find" />
      </div>

      <div className='flex justify-between' >
        <Button className="bg-purple-400 text-purple-900 hover:bg-purple-300" >Filter clients</Button>
        <Button className="bg-purple-400 text-purple-900 hover:bg-purple-300 ">Add client</Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="font-medium">Filter by Medical Status:</label>
          <Select onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>DOA</TableHead>
                <TableHead>Medical Status</TableHead>
                <TableHead>Client Status</TableHead>
                <TableHead>Law Firm</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.client_name}</TableCell>
                  <TableCell>{client.doa}</TableCell>
                  <TableCell>{client.medical_status}</TableCell>
                  <TableCell>{client.client_status}</TableCell>
                  <TableCell>{client.law_firm}</TableCell>
                </TableRow>
              ))}
              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No clients found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    
    </Card>
  )
}

export default Clients