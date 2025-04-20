import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import DetailsTab from "./components/detailsTab"
import ExpensesTab from "./components/expensesTab"

const CaseDetail = () => {
    return (
        
        <Tabs defaultValue="details" className="container-page p-4 w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
                <DetailsTab />
            </TabsContent>
            <TabsContent value="expenses">
                <ExpensesTab />
            </TabsContent>
        </Tabs>
    )
}

export default CaseDetail