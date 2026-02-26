const BASE_URL = 'http://localhost:5000/api/specials';

export const specialsApi = {
  // Public: Get all active specials
  async getAll() {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch specials');
    return res.json();
  },

  // Protected: Create a new special (Multipart for S3)
  async create(formData: FormData, secret: string) {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'x-admin-secret': secret },
      body: formData, // No 'Content-Type' header here, browser sets it for FormData
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to create');
    }
    return res.json();
  },

  // Protected: Delete a special
  async delete(id: string, secret: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-secret': secret },
    });
    if (!res.ok) throw new Error('Failed to delete');
    return res.json();
  },

  // Protected: Update a special
  async update(id: string, formData: FormData, secret: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'x-admin-secret': secret },
      body: formData,
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to update');
    }
    return res.json();
  }
};