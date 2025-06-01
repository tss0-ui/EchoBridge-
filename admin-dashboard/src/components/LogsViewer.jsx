import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LogsViewer() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/logs')
      .then(res => setLogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-gray-100 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">System Logs</h2>
      <pre className="text-xs overflow-auto max-h-64">{logs.join('\n')}</pre>
    </div>
  );
}
