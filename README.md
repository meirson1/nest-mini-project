<h1 align="center">🚀 NestJS REST API – Auth & Bookmarks</h1>

<p align="center">
  A production-ready REST API built with <b>NestJS</b>, featuring JWT authentication,
  user management, and a complete bookmarks CRUD flow — fully covered with
  <b>end-to-end tests</b>.
</p>

<hr />

<h2>✨ Features</h2>

<ul>
  <li>🔐 <b>JWT Authentication</b>
    <ul>
      <li>Signup</li>
      <li>Signin</li>
    </ul>
  </li>
  <li>👤 <b>User Management</b>
    <ul>
      <li>Get current user</li>
      <li>Edit user profile</li>
    </ul>
  </li>
  <li>🔖 <b>Bookmarks CRUD</b>
    <ul>
      <li>Create bookmark</li>
      <li>Get all bookmarks</li>
      <li>Get bookmark by ID</li>
      <li>Edit bookmark</li>
      <li>Delete bookmark</li>
    </ul>
  </li>
  <li>🧪 <b>End-to-End Testing</b> with Pactum</li>
  <li>🗄️ <b>PostgreSQL + Prisma ORM</b></li>
  <li>🐳 <b>Dockerized database</b></li>
  <li>✅ Global validation with ValidationPipe</li>
  <li>🧱 Clean modular architecture</li>
</ul>

<hr />

<h2>🛠️ Tech Stack</h2>

<ul>
  <li>NestJS</li>
  <li>TypeScript</li>
  <li>Prisma ORM</li>
  <li>PostgreSQL</li>
  <li>JWT (Passport)</li>
  <li>Docker</li>
  <li>Pactum (E2E Tests)</li>
</ul>

<hr />

<h2>📦 Installation</h2>

<pre><code>npm install</code></pre>

<hr />

<h2>🐳 Database (Docker)</h2>

<pre><code>docker compose up dev-db -d</code></pre>

<hr />

<h2>🔄 Prisma</h2>

<pre><code>npx prisma migrate dev</code></pre>

<hr />

<h2>▶️ Run the Application</h2>

<pre><code># development
npm run start:dev

# production
npm run start:prod
</code></pre>

<hr />

<h2>🧪 Run Tests</h2>

<pre><code># unit tests
npm run test

# e2e tests
npm run test:e2e

# coverage
npm run test:cov
</code></pre>

<hr />

<h2>📁 Project Structure</h2>

<pre><code>src/
├── auth/        # Authentication & JWT logic
├── user/        # User profile management
├── bookmark/    # Bookmarks CRUD
├── prisma/      # Prisma schema & service
└── main.ts
</code></pre>

<hr />

<h2>📡 API Endpoints</h2>

<h3>Auth</h3>
<ul>
  <li><code>POST /auth/signup</code></li>
  <li><code>POST /auth/signin</code></li>
</ul>

<h3>User</h3>
<ul>
  <li><code>GET /users/me</code></li>
  <li><code>PATCH /users</code></li>
</ul>

<h3>Bookmarks</h3>
<ul>
  <li><code>GET /bookmarks</code></li>
  <li><code>GET /bookmarks/:id</code></li>
  <li><code>POST /bookmarks</code></li>
  <li><code>PATCH /bookmarks/:id</code></li>
  <li><code>DELETE /bookmarks/:id</code></li>
</ul>

<p><i>All protected routes require a valid JWT token.</i></p>

<hr />

<h2>📌 HTTP Status Codes</h2>

<ul>
  <li><code>200</code> – Successful request</li>
  <li><code>201</code> – Resource created</li>
  <li><code>204</code> – No content (update / delete)</li>
  <li><code>400</code> – Validation error</li>
  <li><code>401</code> – Unauthorized</li>
</ul>

<hr />

<h2>📝 Notes</h2>

<ul>
  <li>The API follows REST best practices.</li>
  <li>End-to-end tests ensure real-world reliability.</li>
  <li>Designed for scalability and clean separation of concerns.</li>
  <li>Suitable as a portfolio or production-ready backend project.</li>
</ul>

<hr />

<h2>📄 License</h2>

<p>MIT</p>
