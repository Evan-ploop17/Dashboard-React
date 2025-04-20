export type Client = {
    id: string
    client_name: string
    doa: string
    medical_status: "Active" | "Pending" | "In Progress"
    client_status: "pending" | "processing" | "success" | "failed"
    law_firm: string

}