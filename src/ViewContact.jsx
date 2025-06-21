import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';

function ViewContact() {
  const [contacts, setContacts] = useState([]); // <-- Add this state

  const theme = useContext(ThemeContext);

  // Fetch contacts from API
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`);
        if (!response.ok) throw new Error('Failed to fetch contacts');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Fetch Contacts Error:', error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className={`p-4 max-w-lg mx-auto mt-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow rounded`}>
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Page</h1>

      {/* Data Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Message</th>
                <th className="border px-2 py-1">Address</th>
                <th className="border px-2 py-1">Actions</th> {/* New column */}
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-2">No contacts found.</td>
                </tr>
              ) : (
                contacts.map((contact, idx) => (
                  <tr key={contact._id || idx}>
                    <td className="border px-2 py-1">{contact.name}</td>
                    <td className="border px-2 py-1">{contact.email}</td>
                    <td className="border px-2 py-1">{contact.message}</td>
                    <td className="border px-2 py-1">{contact.address}</td>
                    <td className="border px-2 py-1">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => alert('Edit functionality not implemented yet')}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={async () => {
                          if (window.confirm('Are you sure you want to delete this contact?')) {
                            try {
                              const response = await fetch(
                                `${import.meta.env.VITE_API_URL}/contacts/${contact._id}`,
                                { method: 'DELETE' }
                              );
                              if (!response.ok) throw new Error('Failed to delete contact');
                              // Remove deleted contact from state
                              setContacts(contacts.filter(c => c._id !== contact._id));
                            } catch (err) {
                              alert('Delete failed!');
                            }
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewContact;
