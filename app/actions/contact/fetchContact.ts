export const getContacts = async () => {
  // fetch contacts
  const res = await fetch(`http://localhost:5000/api/v1/contacts`);
  const contacts = await res.json();
  return contacts;
};

export const getContactDetails = async (id: string) => {
  // fetch contacts
  const res = await fetch(`http://localhost:5000/api/v1/contacts/${id}`);
  const contact = await res.json();
  return contact;
};
