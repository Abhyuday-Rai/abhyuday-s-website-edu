# myportfoliowebsite

Portfolio website built with Vite + React.

## Deploy To Vercel With Namecheap Domain

This project is pre-configured for Vercel with SPA routing support in [vercel.json](vercel.json).

### 1) Push project to GitHub

1. Create a GitHub repo (or use existing).
2. Push this folder to that repo.

### 2) Import into Vercel

1. Open Vercel dashboard.
2. Click New Project.
3. Import your GitHub repo.
4. Keep defaults (build command and output are already configured by [vercel.json](vercel.json)).
5. Click Deploy.

### 3) Add custom domain

In Vercel project settings:

1. Go to Domains.
2. Add:
	- abhyudayrai.me
	- www.abhyudayrai.me

### 4) Configure Namecheap DNS

In Namecheap Advanced DNS for abhyudayrai.me:

1. Add an A record:
	- Host: @
	- Value: 76.76.21.21
	- TTL: Automatic
2. Add a CNAME record:
	- Host: www
	- Value: cname.vercel-dns.com
	- TTL: Automatic

### 5) Wait for DNS propagation

Usually 5-30 minutes, sometimes up to 24 hours.

### 6) Set primary domain in Vercel

Choose one as primary:

1. abhyudayrai.me
2. www.abhyudayrai.me

Vercel will auto-issue SSL certificates once DNS resolves.

## Local Development

1. Install dependencies:
	- npm install
2. Start dev server:
	- npm run dev
