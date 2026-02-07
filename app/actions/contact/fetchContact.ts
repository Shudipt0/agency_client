export const getContacts = async () => {
  // fetch contacts
  const res = await fetch(`${process.env.BASE_URL}/contacts`);
  const contacts = await res.json();
  return contacts;
};

export const getContactDetails = async (id: string) => {
  // fetch contacts
  const res = await fetch(`${process.env.BASE_URL}/contacts/${id}`);
  const contact = await res.json();
  return contact;
};
