import { create } from "zustand";
import { Invoice } from "../config/interfaces/invoice.interface";
import { invoices } from "../config/data/data";

type State = {
  invoices: Invoice[];
};

type Actions = {
  deleteInvoice: (id: string) => void;
  createInvoice: (invoice: Invoice) => void;
  setInvoices: (invoices: Invoice[]) => void;
};

export const useStore = create<State & Actions>()((set, state) => ({
  invoices,
  setInvoices: (newInvoices) => set({ invoices: newInvoices }),
  createInvoice: (invoice: Invoice) =>
    set({ invoices: [...state().invoices, invoice] }),
  deleteInvoice: (id: string) => {
    const newInvoices = state().invoices.filter((invoice) => invoice.id !== id);
    set({ invoices: newInvoices });
  },
}));
