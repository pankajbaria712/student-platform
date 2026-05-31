# AJP Notes Storage Setup Guide

## Issue
The API is throwing a "Object not found (404)" error when trying to access notes PDFs from Supabase storage.

## Required Setup in Supabase

### Step 1: Create the "notes" Bucket

1. Go to **Supabase Dashboard** → **Storage**
2. Click **Create a new bucket**
3. Name it: `notes`
4. Choose bucket type: **Private** (for security)
5. Click **Create bucket**

### Step 2: Upload PDF Files

Upload the following files to the `notes` bucket:

```
notes/
  ├── Chepter-01.pdf    (Java Networking)
  ├── Chepter-02.pdf    (JDBC Programming)
  ├── Chepter-03.pdf    (Servlet API and Overview)
  ├── Chepter-04.pdf    (Java Server Pages)
  ├── Chepter-05.pdf    (Java Server Faces)
  └── Chepter-06.pdf    (Hibernate)
```

**Steps to upload:**
1. In **Supabase Dashboard** → **Storage**, select the `notes` bucket
2. Click **Upload file**
3. Select each PDF file (Chepter-01.pdf through Chepter-06.pdf)
4. Upload all 6 files

### Step 3: Verify Setup

1. In Supabase Dashboard, check that all 6 files are visible in the `notes` bucket
2. Test the application by:
   - Navigating to `/semester/6`
   - Clicking the "Notes" button on Advanced Java Programming card
   - Try opening a chapter PDF
3. The PDF should open in a new tab

## File Naming Notes

⚠️ **Important:** The file names are case-sensitive. They must be exactly:
- `Chepter-01.pdf` (Note: spelled "Chepter" not "Chapter")
- `Chepter-02.pdf`
- `Chepter-03.pdf`
- `Chepter-04.pdf`
- `Chepter-05.pdf`
- `Chepter-06.pdf`

## Security Considerations

- The `notes` bucket is **private**, so direct URLs won't work
- The API generates **signed URLs** with **1-hour expiry**
- Only the files specified in the allowlist can be accessed
- The subject validation ensures only `advanced-java-programming` can access notes

## Troubleshooting

### Error: "Object not found"
- ✓ Verify the bucket is named exactly `notes` (lowercase)
- ✓ Check that all PDF files are uploaded
- ✓ Verify file names match exactly (case-sensitive)
- ✓ Check file permissions in Supabase

### Error: "Unauthorized"
- Ensure Supabase admin credentials are set in `.env.local`
- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Error: "Could not generate access URL"
- Check that the Supabase service role key has storage access
- Verify the bucket exists and is accessible
- Check Supabase storage permissions

## Implementation Details

**API Route:** `/api/get-notes-url`
- Parameters: `file` (PDF filename), `subject` (subject slug)
- Returns: JSON with `signedUrl` or error message
- URL expiry: 1 hour
- Allowed files: Chepter-01.pdf through Chepter-06.pdf

**Component:** `NotesChapterCard`
- Displays chapter information
- "Open Notes" button calls the API
- Opens PDF in new tab (no auto-download)
- Shows error messages if file not found

**Page:** `/notes/advanced-java-programming`
- Server-rendered with static metadata
- 6 chapter cards
- Mobile responsive design
- Free access (no payment required)

## Testing Locally

```bash
# Start development server
npm run dev

# Navigate to
# http://localhost:3000/semester/6

# Click Notes button on AJP card
# Should redirect to /notes/advanced-java-programming

# Click "Open Notes" on any chapter
# Should open PDF in new tab
```

## After Upload

Once files are uploaded to Supabase, the feature will work automatically. Users will be able to:
1. Click "Notes" button on Semester 6 → Advanced Java Programming
2. View all 6 chapters on the notes page
3. Click "Open Notes" to view PDF in new tab
4. Access notes is completely free

