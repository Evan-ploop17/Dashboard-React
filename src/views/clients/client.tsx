import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

const statusMap: Record<string, Client["medical_status"] | "All"> = {
  "active": "Active",
  "pending": "Pending",
  "in-progress": "In Progress",
  "all": "All"
}

const Clients = () => {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState<Client[]>(mockClientData)
  const inputRef = useRef(null)

  const handleOnClickSearchButton = () => {
    setSearchQuery(inputRef.current?.value)
    const filtered = mockClientData.filter(client => {
      const matchesSearch = client.client_name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSearch
    })
    setFilteredData(filtered)
    setSelectedStatus('all')
  }

  const handleOnChangeMedicalStatus = (status) => {
    setSelectedStatus(status)
    if (status === 'all') return setFilteredData(mockClientData)
    const filtered = mockClientData.filter(client => {
      const matchesStatus = status
        ? client.medical_status === statusMap[status]
        : true
      return matchesStatus
    })

    setFilteredData(filtered)
    setSearchQuery("")
  }
  
  return (
    <Card className="container-page p-4" >
      <div className='flex justify-between' >
        <h1 className="text-4xl">clients</h1>
        <Input
          className="max-w-3xs"
          placeholder="Client to find"
          value={searchQuery}
          ref={inputRef}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className='flex justify-between' >
        <Button
          className="bg-purple-400 text-purple-900 hover:bg-purple-300"
          onClick={handleOnClickSearchButton}
        >
          Filter clients
        </Button>
        <Button className="bg-purple-400 text-purple-900 hover:bg-purple-300 ">Add client</Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="font-medium">Filter by Medical Status:</label>
          <Select onValueChange={handleOnChangeMedicalStatus} value={selectedStatus}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
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
