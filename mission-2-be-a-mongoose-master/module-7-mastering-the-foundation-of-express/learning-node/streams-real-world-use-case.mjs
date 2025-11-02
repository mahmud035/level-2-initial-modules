import fs from 'fs';

//* 1. Large File Downloads

// Download large report files in chunks to avoid memory overload
app.get('/reports/:id/download', async (req, res) => {
  const report = await Report.findById(req.params.id);
  const filepath = report.filepath;

  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${report.name}.pdf"`
  );
  res.setHeader('Content-Type', 'application/pdf');

  // Stream file to response
  const fileStream = fs.createReadStream(filepath);
  fileStream.pipe(res);
});

//* 2. Video Streaming

app.get('/videos/:id', async (req, res) => {
  const video = await Video.findById(req.params.id);
  const videoPath = video.filepath;
  const stat = await fs.promises.stat(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    // Support video seeking (YouTube-style)
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    });

    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    });

    fs.createReadStream(videoPath).pipe(res);
  }
});

//* 3. Real-Time Log Streaming

app.get('/logs/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Stream log file
  const logStream = fs.createReadStream('app.log', { encoding: 'utf-8' });

  logStream.on('data', (chunk) => {
    res.write(`data: ${JSON.stringify({ log: chunk })}\n\n`);
  });

  logStream.on('end', () => {
    res.end();
  });

  req.on('close', () => {
    logStream.destroy();
  });
});
