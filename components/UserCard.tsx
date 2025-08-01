import React from "react";

type UserProps = {
  name: string;
  email: string;
};

export const UserCard: React.FC<UserProps> = ({ name, email }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 max-w-sm transition-transform hover:scale-[1.02] hover:shadow-xl">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
    <p className="text-sm text-gray-600">{email}</p>
  </div>
);
