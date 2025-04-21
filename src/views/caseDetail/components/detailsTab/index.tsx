import LabeledText from "@/components/molecules/LabeledText"
import { Card } from "@/components/ui/card"
import { useAppStore } from "@/stores/useAppStore"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Client } from "types/client"


const DetailsTab = () => {

  const fetchClients = useAppStore((state) => state.fetchClients)
  const mockClientData = useAppStore((state) => state.clients)
  const [userToShow, setUserToShow] = useState<Client>()

  const location = useLocation()

  useEffect(() => {
    fetchClients()
  }, [])

  useEffect(() => {
    const userId = location.pathname.split('/').at(-1)
    const filterUsers = mockClientData.filter(({id}) => id === userId )[0]
    setUserToShow(filterUsers)
  }, [mockClientData, location.pathname])

  return (
    <Card className="py-8 px-4">
      <LabeledText label="Client Name" text={userToShow?.client_name} />
      <LabeledText label="Date Birth" text={userToShow?.birthdate} />
      <LabeledText label="DATE OF INCIDENT" text={userToShow?.date_incident} />
    </Card>
  )
}

export default DetailsTab