"use client";

import CustomerForm from "@/components/CustomerForm";
import { customersAPI } from "@/lib/api";
import { CustomerCreate } from "@/types";

export default function NewCustomerPage() {
  const handleSubmit = async (data: CustomerCreate) => {
    await customersAPI.create(data);
  };

  return <CustomerForm title="顧客登録" onSubmit={handleSubmit} />;
}
