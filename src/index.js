const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { events } = req.body;
    console.log(req.body)
  // Lấy tin nhắn từ LINE
  for (const event of events) {
    if (event.type === 'message') {
      const messageId = event.message.id;
      const text = event.message.text;

      // Xử lý tin nhắn tại đây (ví dụ: lưu trữ vào cơ sở dữ liệu, gửi tin nhắn trả lời, v.v.)
      console.log(`Received message: ${text}, Message ID: ${messageId}`);

      // Gửi tin nhắn trả lời
      // replyMessage(replyToken, 'Reply message');
    }
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Webhook server is listening on ${PORT}`);
});