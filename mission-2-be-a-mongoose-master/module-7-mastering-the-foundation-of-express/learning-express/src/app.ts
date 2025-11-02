import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Request, type Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const userRoutes = express.Router();
const courseRoutes = express.Router();

// IMPORTANT: Middleware Execution Order
// CRITICAL: Order matters! Middleware executes top to bottom.

// 1. Security & logging (FIRST)
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Request logging
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// 2. Body parsers (BEFORE routes)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// 3. Custom middleware
// app.use(addRequestId);
// app.use(logger);

// 4. Static files
app.use('/uploads', express.static('uploads'));

// 5. Rate limiting
// app.use('/api', generalLimiter);

// 6. Routes
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/jobs', jobRoutes);
// app.use('/api/v1/applications', applicationRoutes);

// ==============================================
// For Practice purposes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/courses', courseRoutes);

userRoutes.post('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: 'User created successfully',
    data: user,
  });
});

courseRoutes.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: 'Course created successfully',
    data: course,
  });
});

// Params & Query example
app.get('/users/:userId/posts/:postId', (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.query);

  res.json({
    userId: req.params.userId,
    postId: req.params.postId,
    query: req.query.email,
  });
});
// ==============================================

// 7. 404 handler (AFTER all routes)
// app.all('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: `Route ${req.originalUrl} not found`,
//   });
// });

// 8. Error handler (LAST)
// app.use(errorHandler);

export default app;
