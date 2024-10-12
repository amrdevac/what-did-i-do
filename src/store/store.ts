// src/store.ts
import { create } from "zustand";


// Definisikan tipe state
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementBy: (tambah: number) => void; // Tambahkan fungsi untuk parameter
  reset: () => void;
}

// Membuat store Zustand
const bambangCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementBy: (tambah: number) => set((state) => ({ count: state.count + tambah })), // Fungsi baru

  reset: () => set({ count: 0 }),
}));

export default bambangCounter;
