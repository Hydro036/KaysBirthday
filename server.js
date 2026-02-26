// Simple visitor logging server
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const DATA_FILE = path.join(__dirname, 'visitors.json');
const BLOCKED_FILE = path.join(__dirname, 'blocked.json');
const PORT = process.env.PORT || 3000;

function readData(){
  try{ return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')||'[]'); }
  catch(e){ return []; }
}

function writeData(data){
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function readBlocked(){
  try{ return JSON.parse(fs.readFileSync(BLOCKED_FILE, 'utf8')||'[]'); }
  catch(e){ return []; }
}

function writeBlocked(data){
  fs.writeFileSync(BLOCKED_FILE, JSON.stringify(data, null, 2), 'utf8');
}

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Receive a visit record and capture client IP
app.post('/log', (req, res) => {
  const rec = req.body;
  if(!rec || !rec.time) return res.status(400).json({error:'invalid record'});
  // Capture client IP from request
  rec.ip = req.ip || req.connection.remoteAddress || 'unknown';
  
  // Check if IP is blocked
  const blocked = readBlocked();
  rec.isBlocked = blocked.includes(rec.ip);
  
  const data = readData();
  data.push(rec);
  writeData(data);
  res.json({ok:true, blocked: rec.isBlocked});
});

// Return all visit records
app.get('/visitors', (req, res) => {
  res.json(readData());
});

// Get blocked IPs list
app.get('/blocked', (req, res) => {
  res.json(readBlocked());
});

// Block an IP
app.post('/block', (req, res) => {
  const {ip} = req.body;
  if(!ip) return res.status(400).json({error:'IP required'});
  const blocked = readBlocked();
  if(!blocked.includes(ip)){
    blocked.push(ip);
    writeBlocked(blocked);
  }
  res.json({ok:true, blocked});
});

// Unblock an IP
app.post('/unblock', (req, res) => {
  const {ip} = req.body;
  if(!ip) return res.status(400).json({error:'IP required'});
  let blocked = readBlocked();
  blocked = blocked.filter(b => b !== ip);
  writeBlocked(blocked);
  res.json({ok:true, blocked});
});

app.listen(PORT, ()=> console.log(`Visitor logger running on http://localhost:${PORT}`));
