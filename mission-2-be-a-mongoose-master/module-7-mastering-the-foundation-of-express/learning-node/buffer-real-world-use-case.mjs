// application.controller.js - Handling resume upload
import fs from 'fs/promises';
import path from 'path';

export const uploadResume = async (req, res) => {
  try {
    // Multer provides file as buffer
    const { buffer, originalname } = req.file;

    console.log(buffer); // <Buffer 25 50 44 46 2d 31 2e 34...> (PDF binary data)
    console.log(buffer.length); // Size in bytes

    // Save buffer to file
    const filePath = path.join('uploads', 'resumes', originalname);
    await fs.writeFile(filePath, buffer);

    res.status(200).json({
      success: true,
      message: 'Resume uploaded successfully',
      size: `${(buffer.length / 1024).toFixed(2)} KB`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/*
What's happening:

- User uploads PDF
- Multer reads file into buffer (binary data in memory)
- You process/save the buffer
- Buffer holds entire file in RAM (problem for large files!)
*/
