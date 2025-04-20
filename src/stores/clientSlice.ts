import { mockClientData } from "../../mocks/client"
import { Client } from "types/client"
import { StateCreator } from "zustand"

export type ClientSliceType = {
    clients: Client[]
    fetchClients: () => Promise<void>
}

export const createClientSlice : StateCreator<ClientSliceType> = (set) => ({
    clients: [],
    fetchClients: async() => {
        const clients = await  new Promise<Client[]>((resolve) => {
            setTimeout(() => {
              resolve(mockClientData)
            }, 1000)
        })
        set({
            clients
        })
    }
})