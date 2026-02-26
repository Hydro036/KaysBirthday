const ADMIN_PASSWORD = 'Itz_Larry';

const adminModal = document.getElementById('adminPwModal');
const adminInput = document.getElementById('adminPwInput');
const adminSubmit = document.getElementById('adminPwSubmit');
const adminError = document.getElementById('adminPwError');
const adminControls = document.getElementById('adminControls');

function showAdminModal(){
  adminModal.style.display = 'flex';
  document.body.classList.add('blurred');
}

function hideAdminModal(){
  adminModal.style.display = 'none';
  document.body.classList.remove('blurred');
}

function unlockAdmin(){
  adminError.textContent = '';
  adminControls.style.display = 'block';
  hideAdminModal();

  fetchVisitors();
}

function tryAdminUnlock(){
  if(adminInput.value === ADMIN_PASSWORD){
    unlockAdmin();
  } else {
    adminError.textContent = 'Incorrect admin password.';
    const rec = {
        type: 'failed_admin_login',
      time: new Date().toISOString(),
      ua: navigator.userAgent,
      platform: navigator.platform || null,
      ip: 'unknown'
    };
    fetch('/log', {
      method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(rec)
    }).catch(()=>{
      const arr = JSON.parse(localStorage.getItem('failedLoginsLocal')||'[]');
      arr.push(rec);
      localStorage.setItem('failedLoginsLocal', JSON.stringify(arr));
    });
  }
}

adminSubmit.addEventListener('click', tryAdminUnlock);
adminInput.addEventListener('keydown', e => { if(e.key === 'Enter') tryAdminUnlock(); });



const refreshBtn = document.getElementById('refreshBtn');
if(refreshBtn){
  refreshBtn.addEventListener('click', ()=>{
    fetchVisitors();
  });
}

showAdminModal();

function renderVisitors(list){
  const app = document.getElementById('adminApp');

  const prev = app.querySelector('.visitors-section');
  if(prev) prev.remove();

  const container = document.createElement('div');
  container.className = 'visitors-section';

  const visits = list.filter(item => !item.type || item.type.indexOf('failed') === -1);
  const failed = list.filter(item => item.type && item.type.indexOf('failed') !== -1);

  // Build tables immediately
  const visBlock = document.createElement('div');
  visBlock.innerHTML = `<h3>Visitor list (${visits.length})</h3>`;
  
  const visTable = document.createElement('table');
  visTable.className = 'log-table';
  visTable.id = 'visTable';
  visTable.innerHTML = `<thead><tr><th>IP Address</th><th>Device</th><th>Time</th><th>Action</th></tr></thead><tbody></tbody>`;
  const visBody = visTable.querySelector('tbody');
  
  visits.slice().reverse().forEach(v => {
    const row = document.createElement('tr');
    row.className = `visit-row`;
    row.dataset.ip = v.ip || 'local';
    row.innerHTML = `
      <td class="ip-cell">${v.ip || 'local'}</td>
      <td>${v.platform || 'Unknown'} ${v.screen || ''}</td>
      <td>${v.time}</td>
      <td class="action-cell"></td>
    `;
    const actionBtn = document.createElement('button');
    actionBtn.textContent = 'Block';
    actionBtn.className = `block-btn block`;
    actionBtn.addEventListener('click', () => toggleBlock(v.ip, false, () => fetchVisitors()));
    row.querySelector('.action-cell').appendChild(actionBtn);
    visBody.appendChild(row);
  });
  visBlock.appendChild(visTable);

  const failBlock = document.createElement('div');
  failBlock.innerHTML = `<h3>Failed logins (${failed.length})</h3>`;
  
  const failTable = document.createElement('table');
  failTable.className = 'log-table';
  failTable.id = 'failTable';
  failTable.innerHTML = `<thead><tr><th>IP Address</th><th>Type</th><th>Device</th><th>Time</th><th>Action</th></tr></thead><tbody></tbody>`;
  const failBody = failTable.querySelector('tbody');
  
  failed.slice().reverse().forEach(f => {
    const row = document.createElement('tr');
    row.className = `fail-row`;
    row.dataset.ip = f.ip || 'local';
    row.innerHTML = `
      <td class="ip-cell">${f.ip || 'local'}</td>
      <td>${f.type}</td>
      <td>${f.platform || 'Unknown'}</td>
      <td>${f.time}</td>
      <td class="action-cell"></td>
    `;
    const actionBtn = document.createElement('button');
    actionBtn.textContent = 'Block';
    actionBtn.className = `block-btn block`;
    actionBtn.addEventListener('click', () => toggleBlock(f.ip, false, () => fetchVisitors()));
    row.querySelector('.action-cell').appendChild(actionBtn);
    failBody.appendChild(row);
  });
  failBlock.appendChild(failTable);

  container.appendChild(visBlock);
  container.appendChild(failBlock);
  app.appendChild(container);

  // Then fetch blocked IPs and update buttons/rows
  fetch('/blocked').then(r => r.json()).then(blockedList => {
    updateBlockButtons(blockedList);
  }).catch(()=>{
    // ignore
  });
}

function updateBlockButtons(blockedList){
  document.querySelectorAll('[data-ip]').forEach(row => {
    const ip = row.dataset.ip;
    const isBlocked = blockedList.includes(ip);
    const btn = row.querySelector('.block-btn');
    if(!btn) return;
    if(isBlocked){
      row.classList.add('blocked-row');
      btn.textContent = 'Unblock';
      btn.classList.remove('block');
      btn.classList.add('unblock');
      btn.onclick = () => toggleBlock(ip, true, () => fetchVisitors());
    } else {
      row.classList.remove('blocked-row');
      btn.textContent = 'Block';
      btn.classList.remove('unblock');
      btn.classList.add('block');
      btn.onclick = () => toggleBlock(ip, false, () => fetchVisitors());
    }
  });
}

function toggleBlock(ip, isCurrentlyBlocked, callback){
  const endpoint = isCurrentlyBlocked ? '/unblock' : '/block';
  fetch(endpoint, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ip})
  }).then(r => r.json()).then(() => callback()).catch(err => alert('Error: ' + err.message));
}

function fetchVisitors(){
  fetch('/visitors').then(r=>{
    if(!r.ok) throw new Error('no server');
    return r.json();
  }).then(data => renderVisitors(data)).catch(()=>{

    const visits = JSON.parse(localStorage.getItem('localVisitors')||'[]');
    const failed = JSON.parse(localStorage.getItem('failedLoginsLocal')||'[]');
    const combined = [...visits, ...failed];
    renderVisitors(combined);
  });
}
