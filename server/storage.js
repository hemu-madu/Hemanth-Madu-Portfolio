class MemStorage {
  users;
  contacts;
  userId;
  contactId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.userId = 1;
    this.contactId = 1;
  }
  // User methods (keeping existing implementations)
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Contact methods
  async getContacts() {
    return Array.from(this.contacts.values());
  }
  async getContact(id) {
    return this.contacts.get(id);
  }
  async createContact(insertContact) {
    const id = this.contactId++;
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
}
const storage = new MemStorage();
export {
  MemStorage,
  storage
};
