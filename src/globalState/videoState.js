import { create } from 'zustand'

//example of zustand
export const useVideoStore = create((set) => ({
   dataMultimedia:{},
   setDataMultimedia:(data) => set((state) => ({dataMultimedia:data}))
}))
