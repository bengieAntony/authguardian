import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, EyeOff, RefreshCcw, Plus } from 'lucide-react';
import { apiKeysApi } from '@/api/secureAuth';
import { toast } from '@/components/ui/use-toast';

// Mock data - replace with actual API calls
const mockAuthData = [
  { date: '2024-03-15', successful: 85, failed: 12 },
  { date: '2024-03-16', successful: 92, failed: 8 },
  { date: '2024-03-17', successful: 78, failed: 15 },
  { date: '2024-03-18', successful: 88, failed: 10 },
  { date: '2024-03-19', successful: 95, failed: 5 },
];

const mockLogs = [
  {
    id: 1,
    type: 'success',
    user: 'john.doe@example.com',
    method: 'SMS',
    timestamp: '2024-03-19T14:30:00',
    ip: '192.168.1.1',
    location: 'New York, US',
  },
  // Add more mock logs as needed
];

export default function Dashboard() {
  const [mfaMethods, setMfaMethods] = useState({
    ussd: true,
    sms: false,
    voice: false,
    email: false,
  });

  const [apiKeys, setApiKeys] = useState([
    { id: 1, key: 'sk_test_123456789', created: '2024-03-22' },
  ]);
  const [showApiKey, setShowApiKey] = useState({});

  const handleGenerateApiKey = async () => {
    try {
      const response = await apiKeysApi.regenerateApiKey();
      setApiKeys([...apiKeys, { 
        id: apiKeys.length + 1,
        key: response.apiKey,
        created: new Date().toISOString().split('T')[0]
      }]);
      toast({
        title: "Success",
        description: "New API key generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate API key",
        variant: "destructive",
      });
    }
  };

  const toggleApiKeyVisibility = (id) => {
    setShowApiKey(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Tabs defaultValue="mfa" className="w-full">
          <TabsList>
            <TabsTrigger value="mfa">MFA Configuration</TabsTrigger>
            <TabsTrigger value="logs">Authentication Logs</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* MFA Configuration Tab */}
          <TabsContent value="mfa">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">MFA Methods</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">USSD Authentication</h3>
                    <p className="text-sm text-gray-500">Default authentication method</p>
                  </div>
                  <Switch
                    checked={mfaMethods.ussd}
                    onCheckedChange={(checked) => setMfaMethods({ ...mfaMethods, ussd: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">SMS OTP</h3>
                    <p className="text-sm text-gray-500">Send codes via SMS</p>
                  </div>
                  <Switch
                    checked={mfaMethods.sms}
                    onCheckedChange={(checked) => setMfaMethods({ ...mfaMethods, sms: checked })}
                  />
                </div>
                {/* Add more MFA methods */}
              </div>
            </Card>
          </TabsContent>

          {/* Authentication Logs Tab */}
          <TabsContent value="logs">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Authentication Logs</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">User</th>
                      <th className="px-6 py-3 text-left">Method</th>
                      <th className="px-6 py-3 text-left">Time</th>
                      <th className="px-6 py-3 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4">{log.type}</td>
                        <td className="px-6 py-4">{log.user}</td>
                        <td className="px-6 py-4">{log.method}</td>
                        <td className="px-6 py-4">{log.timestamp}</td>
                        <td className="px-6 py-4">{log.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* API Keys Tab */}
          <TabsContent value="api">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">API Keys</h2>
                <Button onClick={handleGenerateApiKey}>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate New Key
                </Button>
              </div>
              <div className="space-y-6">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>Created: {apiKey.created}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 font-mono bg-gray-100 p-3 rounded">
                        {showApiKey[apiKey.id] ? apiKey.key : '•'.repeat(20)}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleApiKeyVisibility(apiKey.id)}
                      >
                        {showApiKey[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Security Analytics</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockAuthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="successful" stroke="#4ade80" />
                    <Line type="monotone" dataKey="failed" stroke="#f87171" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
