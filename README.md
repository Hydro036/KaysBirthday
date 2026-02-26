# Interactive HTML Tutor

Open [interactive.html](interactive.html) in your browser to run the tutorial.

How it works:
- Select a lesson on the left.
- Edit the starter HTML in the editor.
- Click `Run` to see a live preview.
- Click `Check` to run automated checks for the exercise.

Visitor logging / admin
- A simple Node.js server is included to collect visitor records and serve them to the admin page.
- To enable server logging, run:

```bash
npm install
npm start
```

This starts a server on `http://localhost:3000` that accepts POST `/log` and GET `/visitors`.

The frontend will try to POST visit data to `/log` when a user opens the site. If the server is not running, visits are stored locally in `localStorage` and the admin page will show those instead.

**Blocking devices:**
- The admin page displays a "Block" button next to each IP address in the visitor and failed login tables.
- Click "Block" to prevent that IP from logging in. Blocked IPs are highlighted in red and show an "Unblock" button.
- Click "Unblock" to remove a blocked IP from the blocklist.
- The blocked IPs list is saved in `blocked.json` and persists across server restarts.


Want more lessons? Edit `tutorial.js` and add entries to the `lessons` array.
