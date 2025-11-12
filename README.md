Kurze Projektbeschreibung:

Eine moderne Website mit Registrierung und Login, auf der man Termine erstellen, löschen und die Psychologin automatisch per E-Mail informieren kann. Erstellt mit Next.js, PostgreSQL, REST APIs, TypeScript, Figma, Tailwind und EmailJS.



<img width="500" height="500" alt="Reservations System" src="https://github.com/user-attachments/assets/5f28d960-c51a-4dd8-bb97-6288547018e3" />

Backend — Hauptfunktionen

- Registrierung neuer Benutzer — `POST /api/register`
- Terminreservierung — `POST /api/appointments`
- Verwaltung von Terminen (anzeigen, bearbeiten, löschen)  — `GET/PUT/DELETE /api/appointments/:id`
- Benachrichtigung der Psychologen via EmailJS — `POST /api/notify



