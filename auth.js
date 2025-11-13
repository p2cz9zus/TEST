import { initializeApp, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

setLogLevel("debug");
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logContainer = document.getElementById("log-space-container");

onAuthStateChanged(auth, (user) => {
  if (user) {
    logContainer.innerHTML = `
      <h4>💡 ミーティングログ</h4>
      <pre>【2024/09/10】ファン駆動からタイヤ駆動へ方針転換</pre>
      <h4>💻 作業進捗</h4>
      <pre>【田中】回路図チェック完了</pre>
    `;
  } else {
    logContainer.innerHTML = `
      <p class="auth-message">🔒 このセクションは認証が必要です。</p>
    `;
  }
});

signInAnonymously(auth).catch((error) => {
  logContainer.innerHTML = `<p class="auth-message">⚠️ 認証エラー: ${error.message}</p>`;
});
