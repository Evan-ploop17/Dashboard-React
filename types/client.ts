export type Client = {
    client_name: string
    client_status: "pending" | "processing" | "success" | "failed"
    birthdate: string
    date_incident: string,
    doa: string
    id: string
    law_firm: string
    medical_status: "Active" | "Pending" | "In Progress"
}