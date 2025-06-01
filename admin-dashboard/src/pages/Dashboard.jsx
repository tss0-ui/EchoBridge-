import React from 'react';
import UserList from '../components/UserList';
import LogsViewer from '../components/LogsViewer';
import ModelStatus from '../components/ModelStatus';

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ModelStatus status="Active and Serving" />
      <UserList />
      <LogsViewer />
    </div>
  );
}
