import { Button } from "@/components/ui/button";
import UsersTable from "@/components/users-table";
import { UserPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserForm from "@/components/forms/user-form";

export default async function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Adnan
          </span>{" "}
          Dashboard
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Manage your users and keep everything organized.
        </p>
      </div>

      <hr className="border-border/60" />

      {/* Section header + action */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="text-2xl font-semibold">Users</h2>

        <div className="flex justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="whitespace-nowrap">
                Add User <UserPlus className="ml-2 size-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add User</DialogTitle>
                <DialogDescription>
                  Add a new user to the database.
                </DialogDescription>
                <UserForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table panel */}
      <div className="rounded-xl border border-border/60 bg-background shadow-sm">
        <div className="p-3 md:p-6">
          <UsersTable />
        </div>
      </div>
    </div>
  );
}

