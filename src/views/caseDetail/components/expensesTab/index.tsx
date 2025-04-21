import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

function ExpensesTab() {

  return (
    <>
      <Dialog>
        <DialogTrigger className="btn bg-purple-400 text-purple-900 hover:bg-purple-300 hover:cursor-pointer py-2 px-4 rounded-lg my-2  "> 
          Add Expense
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Expenses</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col justify-between gap-2 mb-4">
            <Label className="font-medium">Invoice Number:</Label>
            <Input type="text" placeholder="Enter invoice number" />
          </div>

          <div className="flex flex-col justify-between gap-2 mb-4">
            <Label className="font-medium">Payment Status:</Label>
            <Input type="text" placeholder="Enter Payment Status" />
          </div>

          <div className="flex flex-col justify-between gap-2 mb-4">
            <Label className="font-medium">Total Amount:</Label>
            <Input type="text" placeholder="Enter Total Amount" />
          </div>

          <div className="flex flex-col justify-between gap-2 mb-4">
            <Label className="font-medium">Payment Method:</Label>
            <Input type="text" placeholder="Enter Payment Method" />
          </div>

          <Button
            className="bg-purple-400 text-purple-900 hover:bg-purple-300 font-bold hover:cursor-pointer py-2 px-4 rounded-lg my-2"
            onClick={() => console.log("Add Expense")}
          >
            Add Expense
          </Button>

        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}

export default ExpensesTab