export const getContacts = async () => {
  // fetch contacts
  const res = await fetch(`http://localhost:5000/api/v1/contacts`);
  const contacts = await res.json();
  return contacts;
};
