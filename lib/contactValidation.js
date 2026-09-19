// Shared by the contact form (client) and /api/contact (server).
// The server is authoritative; the client copy only gives faster feedback.

export const LIMITS = {
  name: { min: 1, max: 50 },
  email: { max: 254 },
  phone: { max: 30 },
  message: { min: 10, max: 2000 },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]+$/;

export function validateContact(data) {
  const errors = {};
  const str = (v) => (typeof v === "string" ? v.trim() : "");

  const firstname = str(data?.firstname);
  const lastname = str(data?.lastname);
  const email = str(data?.email);
  const phone = str(data?.phone);
  const message = str(data?.message);

  if (firstname.length < LIMITS.name.min) errors.firstname = "First name is required.";
  else if (firstname.length > LIMITS.name.max) errors.firstname = `First name must be ${LIMITS.name.max} characters or fewer.`;

  if (lastname.length < LIMITS.name.min) errors.lastname = "Last name is required.";
  else if (lastname.length > LIMITS.name.max) errors.lastname = `Last name must be ${LIMITS.name.max} characters or fewer.`;

  if (!email) errors.email = "Email address is required.";
  else if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";

  if (phone && (phone.length > LIMITS.phone.max || !PHONE_RE.test(phone))) errors.phone = "Enter a valid phone number.";

  if (message.length < LIMITS.message.min) errors.message = `Message must be at least ${LIMITS.message.min} characters.`;
  else if (message.length > LIMITS.message.max) errors.message = `Message must be ${LIMITS.message.max} characters or fewer.`;

  return { errors, values: { firstname, lastname, email, phone, message } };
}
