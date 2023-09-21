import { create } from "zustand";

const authStore = create((set) => ({
    status: false,
    error: false,
    rol: '',
    setAuthUser: data => set(() => ({ status: data.status, error: data.error, rol: data.rol }))
}))

export default authStore 