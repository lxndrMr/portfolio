export default function Footer() {
  return (
    <footer className="mb-10 mt-24 px-4 text-center text-gray-500">
      <small className="block text-xs mb-2">
        &copy; Alexandre Moro. Tous droits réservés.
      </small>
      <p className="text-xs">
        <span className="font-semibold">À propos de ce site web :</span>{" "}
        construit avec React & Next.js (App Router & Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
        hébergement sur Hostinger.
      </p>
    </footer>
  );
}
