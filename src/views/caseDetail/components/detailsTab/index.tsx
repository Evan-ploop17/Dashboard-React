import LabeledText from "@/components/molecules/LabeledText"
import { Card } from "@/components/ui/card"


const DetailsTab = () => {
  return (
    <Card className="py-8 px-4">
        <LabeledText label="Client Name" text="" />
        <LabeledText label="Date Birth" text="" />
        <LabeledText label="DATE OF INCIDENT" text="" />
    </Card>
  )
}

export default DetailsTab