import { create } from "zustand";
import { ClientSliceType, createClientSlice } from "./clientSlice";


export const useAppStore = create<ClientSliceType>((...a) => ({
    ...createClientSlice(...a)
}))