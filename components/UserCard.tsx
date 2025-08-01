import React from "react";

export const UserCard: React.FC<{ user: any }> = ({ user }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 max-w-sm transition-transform hover:scale-[1.02] hover:shadow-xl">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
    <p className="text-sm text-gray-600">{user.email}</p>
  </div>
);
