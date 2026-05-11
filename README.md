# StudentHub - BE Computer Engineering Education Platform

A production-ready full-stack education platform for BE Computer Engineering students built with Next.js 14, TypeScript, Tailwind CSS, Supabase, and Razorpay.

## Features

- **Free Content Access**: Read notes, PYQs, and important questions directly on the website
- **Premium PDF Downloads**: Secure payment integration for PDF downloads at ₹33 per subject
- **Modern UI**: Clean, professional design with mobile responsiveness
- **SEO Optimized**: Server-side rendering and static generation for better performance
- **Secure Payments**: Razorpay integration with payment verification
- **Private File Storage**: Supabase Storage with signed URLs for premium content

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Razorpay
- **File Storage**: Supabase Storage
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Razorpay account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd student-platform
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Supabase Setup

1. Create a new Supabase project
2. Run the following SQL to create tables:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subjects table
CREATE TABLE subjects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  semester INTEGER NOT NULL,
  branch TEXT DEFAULT 'Computer Engineering',
  free_content TEXT,
  premium_pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  subject_id TEXT REFERENCES subjects(slug),
  payment_id TEXT UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO subjects (title, slug, semester, free_content) VALUES
('DBMS', 'dbms-semester-5', 5, 'Database Management Systems content...'),
('Operating System', 'operating-system-semester-5', 5, 'Operating Systems content...'),
('Computer Networks', 'computer-networks-semester-5', 5, 'Computer Networks content...');
```

3. Create a storage bucket named `premium-pdfs` with private access
4. Upload PDF files to the bucket and update the `premium_pdf_url` field

### Razorpay Setup

1. Create a Razorpay account
2. Get your API keys from the dashboard
3. Add them to your environment variables

### Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/
│   ├── create-order/     # Razorpay order creation
│   ├── verify-payment/   # Payment verification
│   └── generate-link/    # Premium download links
├── semester/[semester]/  # Dynamic semester pages
├── subject/[slug]/       # Dynamic subject pages
├── globals.css           # Global styles
├── layout.tsx            # Root layout
└── page.tsx              # Homepage

components/
├── Navbar.tsx            # Navigation component
├── Footer.tsx            # Footer component
├── Hero.tsx              # Hero section
├── SemesterCard.tsx      # Semester card component
├── SubjectCard.tsx       # Subject card component
└── PremiumButton.tsx     # Payment button component

lib/
├── supabase.ts           # Supabase client
└── types.ts              # TypeScript types

middleware.ts              # Authentication middleware
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Database Migration

For production, consider using Supabase migrations or a migration tool like Prisma.

## Security Features

- Payment signature verification
- Private file storage with signed URLs
- Authentication middleware
- Secure API routes
- No public PDF access

## Performance Optimizations

- Server-side rendering
- Static generation for subject pages
- Lazy loading components
- Optimized images
- Minimal animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
