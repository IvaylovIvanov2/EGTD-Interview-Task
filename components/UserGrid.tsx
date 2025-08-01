import React from "react";
import { UserCard } from "./UserCard";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserGrid: React.FC<{ users: User[] }> = ({ users }) => (
  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>
);
