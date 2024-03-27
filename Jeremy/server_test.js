const http = require('http');
const fs = require('fs');
const path = require('path');

// 建立 HTTP 伺服器
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url; // 將請求的 URL 路徑轉換為檔案路徑

  // 如果 URL 是根路徑，則預設載入 index.html
  if (filePath === './') {
    filePath = './index.html';
  }

  // 解析檔案的 MIME 類型
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
  }

  // 讀取並回傳檔案內容
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 若找不到檔案，回傳 404 錯誤
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
      } else {
        // 其他錯誤，回傳 500 錯誤
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
    } else {
      // 回傳正確的檔案內容及 MIME 類型
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

// 指定伺服器監聽的連接埠
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
