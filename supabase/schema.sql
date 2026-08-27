-- Desynt Digital Solutions CMS schema for Supabase (Postgres)
-- 1. Create a project at https://supabase.com
-- 2. Paste this file into SQL Editor → Run
-- 3. Authentication → Users → Add user (email + password) for dashboard login
-- 4. Put the project URL, anon key, and service role key in .env.local

create extension if not exists pgcrypto;

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  client text not null,
  category text not null,
  industry text not null default '',
  tags text[] not null default '{}',
  tech_stack text[] not null default '{}',
  summary text not null default '',
  overview text not null default '',
  challenge text not null default '',
  solution text not null default '',
  approach text[] not null default '{}',
  results text[] not null default '{}',
  metrics jsonb not null default '[]',
  year text not null default '',
  duration text not null default '',
  team_size text not null default '',
  live_url text,
  cover_image text not null default '',
  gallery jsonb not null default '[]',
  featured boolean not null default false,
  published boolean not null default true,
  testimonial_quote text,
  testimonial_name text,
  testimonial_role text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  department text not null,
  location text not null,
  type text not null,
  description text not null default '',
  requirements text[] not null default '{}',
  nice_to_have text[] not null default '{}',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references jobs(id) on delete set null,
  job_title text not null,
  name text not null,
  email text not null,
  phone text,
  linkedin text,
  resume_url text,
  cover_letter text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  budget text,
  message text not null,
  source text not null default 'contact',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null default '',
  category text not null default '',
  content text[] not null default '{}',
  cover_image text not null default '',
  author_name text not null default '',
  author_role text not null default '',
  read_time text not null default '',
  date date not null default current_date,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  name text not null,
  role text not null,
  company text not null,
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists projects_published_idx on projects (published, featured);
create index if not exists jobs_published_idx on jobs (published);
create index if not exists blog_published_idx on blog_posts (published, date desc);

alter table projects enable row level security;
alter table jobs enable row level security;
alter table applications enable row level security;
alter table inquiries enable row level security;
alter table blog_posts enable row level security;
alter table testimonials enable row level security;

drop policy if exists "public read published projects" on projects;
create policy "public read published projects" on projects for select using (published = true);

drop policy if exists "auth all projects" on projects;
create policy "auth all projects" on projects for all to authenticated using (true) with check (true);

drop policy if exists "public read published jobs" on jobs;
create policy "public read published jobs" on jobs for select using (published = true);

drop policy if exists "auth all jobs" on jobs;
create policy "auth all jobs" on jobs for all to authenticated using (true) with check (true);

drop policy if exists "anon insert applications" on applications;
create policy "anon insert applications" on applications for insert to anon with check (true);

drop policy if exists "auth all applications" on applications;
create policy "auth all applications" on applications for all to authenticated using (true) with check (true);

drop policy if exists "anon insert inquiries" on inquiries;
create policy "anon insert inquiries" on inquiries for insert to anon with check (true);

drop policy if exists "auth all inquiries" on inquiries;
create policy "auth all inquiries" on inquiries for all to authenticated using (true) with check (true);

drop policy if exists "public read published posts" on blog_posts;
create policy "public read published posts" on blog_posts for select using (published = true);

drop policy if exists "auth all posts" on blog_posts;
create policy "auth all posts" on blog_posts for all to authenticated using (true) with check (true);

drop policy if exists "public read published testimonials" on testimonials;
create policy "public read published testimonials" on testimonials for select using (published = true);

drop policy if exists "auth all testimonials" on testimonials;
create policy "auth all testimonials" on testimonials for all to authenticated using (true) with check (true);
