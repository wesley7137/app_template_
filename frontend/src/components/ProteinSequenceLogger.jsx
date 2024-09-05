import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

const ProteinSequenceLogger = () => {
  const [logs, setLogs] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [language, setLanguage] = useState('');
  const [sequence, setSequence] = useState('');
  const [selectedSequence, setSelectedSequence] = useState(null);

  useEffect(() => {
    // In a real application, you'd load existing logs from a backend or local storage here
    setLogs([]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      userInput,
      language,
      sequence
    };
    setLogs([...logs, newLog]);
    setUserInput('');
    setLanguage('');
    setSequence('');
  };

  const handleViewSequence = (log) => {
    setSelectedSequence(log);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Protein Sequence Logger</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Log New Sequence</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="User Input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
            <Input
              placeholder="Natural Language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            />
            <Input
              placeholder="Protein Sequence"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              required
            />
            <Button type="submit">Log Sequence</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Log Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User Input</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                  <TableCell>{log.userInput}</TableCell>
                  <TableCell>{log.language}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleViewSequence(log)}>View Sequence</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedSequence && (
        <Card>
          <CardHeader>
            <CardTitle>Sequence Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Timestamp:</strong> {new Date(selectedSequence.timestamp).toLocaleString()}</p>
            <p><strong>User Input:</strong> {selectedSequence.userInput}</p>
            <p><strong>Language:</strong> {selectedSequence.language}</p>
            <p><strong>Sequence:</strong> {selectedSequence.sequence}</p>
          </CardContent>
        </Card>
      )}

      {logs.length === 0 && (
        <div className="flex items-center justify-center p-4 bg-yellow-100 text-yellow-700 rounded-md">
          <AlertCircle className="mr-2" />
          <p>No logs available. Start by adding a new sequence.</p>
        </div>
      )}
    </div>
  );
};

export default ProteinSequenceLogger;
