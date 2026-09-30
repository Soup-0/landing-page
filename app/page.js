export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-badge">Landing Page Profesional</span>
          <h1>Landing Page Profesional untuk Bisnis Anda</h1>
          <p className="hero-text">
            Tingkatkan konversi dengan desain modern, performa cepat, dan struktur SEO-friendly yang membantu produk atau jasa Anda tampil lebih kuat.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Konsultasi Gratis</a>
            <a href="#pricing" className="btn btn-secondary">Pesan Sekarang</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>+40%</strong>
              <span>Kenaikan konversi</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsif di semua perangkat</span>
            </div>
            <div>
              <strong>Next.js</strong>
              <span>Teknologi modern</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="mockup-header">
              <span className="dot purple"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-title">Mockup Website</div>
              <div className="mockup-card">
                <h3>Desain landing page premium</h3>
                <p>Ilustrasi proses development yang rapi, terstruktur, dan berorientasi konversi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-heading">
          <p className="eyebrow">Jasa Development</p>
          <h2>Apa yang kami tawarkan</h2>
          <p>Pembuatan landing page custom, responsive, cepat, dan aman yang siap mengubah pengunjung menjadi pelanggan.</p>
        </div>
        <div className="service-grid">
          <article>
            <h3>Pembuatan custom</h3>
            <p>Landing page disesuaikan dengan brand dan kebutuhan bisnis Anda.</p>
          </article>
          <article>
            <h3>Responsif & cepat</h3>
            <p>Optimasi performa agar halaman terbuka cepat di semua perangkat.</p>
          </article>
          <article>
            <h3>Aman & stabil</h3>
            <p>Standar keamanan modern dan testing menyeluruh sebelum launch.</p>
          </article>
          <article>
            <h3>Integrasi analitik</h3>
            <p>Form, tracking, dan alat marketing siap terhubung dengan lancar.</p>
          </article>
        </div>
      </section>

      <section className="tech-stack">
        <div>
          <p className="eyebrow">Teknologi</p>
          <h2>Teknologi yang digunakan</h2>
        </div>
        <div className="tech-list">
          <span>Next.js</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Vercel</span>
          <span>Google Analytics</span>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="section-heading">
          <p className="eyebrow">Portofolio</p>
          <h2>Contoh landing page & studi kasus</h2>
        </div>
        <div className="portfolio-grid">
          <article className="portfolio-card">
            <div className="portfolio-mockup bg-wedding" aria-hidden="true" />
            <div className="portfolio-badge">Template</div>
            <h3>Landing page pribadi</h3>
            <p>Template landing page pribadi dengan informasi lengkap jasa dan kontak</p>
            <a href="" target="" rel="noreferrer" className="link">Lihat template</a>
          </article>
          <article className="portfolio-card">
            <div className="portfolio-mockup bg-umkm" aria-hidden="true" />
            <div className="portfolio-badge">Template</div>
            <h3>Digital Product Template</h3>
            <p>Template landing page premium dengan fokus pada penjualan produk digital, struktur konversi, dan presentasi fitur yang elegan.</p>
            <a href="" target = "" rel="noreferrer" className="link">Lihat template</a>
          </article>
          <article className="portfolio-card">
            <div className="portfolio-mockup bg-personal" aria-hidden="true" />
            <div className="portfolio-badge">Template</div>
            <h3>Freelancer Template</h3>
            <p>Landing page personal profesional untuk freelancer, dengan tampilan yang bersih, brand-centric, dan ajakan bertindak yang kuat.</p>
            <a href="" target="" rel="noreferrer" className="link">Lihat template</a>
          </article>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-heading">
          <p className="eyebrow">Testimoni</p>
          <h2>Bukti sosial dari klien</h2>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Tim ini cepat, komunikatif, dan hasilnya jauh melampaui ekspektasi kami."</p>
            <span>— Dinda, CEO Startup Edu</span>
          </div>
          <div className="testimonial-card">
            <p>"Landing page baru membantu kami menutup lebih banyak penjualan setiap minggu."</p>
            <span>— Budi, Owner Studio Kreatif</span>
          </div>
        </div>
        <div className="logo-strip">
          <span>Brand A</span>
          <span>Brand B</span>
          <span>Brand C</span>
          <span>Brand D</span>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">Proses Kerja</p>
          <h2>Langkah kerja yang jelas dan terstruktur</h2>
        </div>
        <div className="process-grid">
          <article>
            <h3>1. Konsultasi kebutuhan</h3>
            <p>Kami mengumpulkan tujuan bisnis, target audiens, dan fitur yang Anda inginkan.</p>
          </article>
          <article>
            <h3>2. Desain wireframe</h3>
            <p>Layout dan alur konversi disusun sebelum implementasi agar hasil lebih tepat.</p>
          </article>
          <article>
            <h3>3. Development & testing</h3>
            <p>Pengerjaan teknis, integrasi form, dan pengujian performa yang menyeluruh.</p>
          </article>
          <article>
            <h3>4. Launch & support</h3>
            <p>Halaman live, monitoring, dan dukungan awal setelah peluncuran.</p>
          </article>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="section-heading">
          <p className="eyebrow">Harga & paket</p>
          <h2>Pilih paket sesuai kebutuhan bisnis Anda</h2>
        </div>
        <div className="pricing-grid">
          <article>
            <h3>Basic</h3>
            <p>1 halaman landing page</p>
            <strong>Mulai dari Rp3.500.000</strong>
            <ul>
              <li>Design sederhana</li>
              <li>Responsive</li>
              <li>Form kontak</li>
            </ul>
          </article>
          <article className="popular">
            <h3>Standard</h3>
            <p>Multi-section landing page</p>
            <strong>Mulai dari Rp6.500.000</strong>
            <ul>
              <li>Desain custom</li>
              <li>SEO dasar</li>
              <li>Integrasi analytics</li>
            </ul>
          </article>
          <article>
            <h3>Premium</h3>
            <p>Landing page custom + integrasi</p>
            <strong>Hubungi untuk penawaran</strong>
            <ul>
              <li>Custom flow</li>
              <li>Integrasi API / payment</li>
              <li>Support after launch</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <div className="about-photo"></div>
          <div>
            <p className="eyebrow">Tentang Developer</p>
            <h2>Halo, saya developer landing page Anda</h2>
            <p>Saya Reyhan, spesialis Next.js dan desain landing page dengan pengalaman membantu bisnis digital meningkatkan konversi melalui halaman promosi yang elegan dan efektif.</p>
            <ul>
              <li>5+ tahun pengalaman web development</li>
              <li>Spesialisasi: Next.js, React, Tailwind CSS</li>
              <li>Fokus: hasil konversi dan kecepatan halaman</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Mulai Sekarang</p>
          <h2>Mulai bangun landing page Anda hari ini</h2>
          <p>Isi form atau hubungi saya langsung untuk konsultasi dan penawaran harga sesuai proyek Anda.</p>
          <div className="contact-details">
            <div>
              <strong>WhatsApp</strong>
              <span>+62 852-1381-2726</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>azrielreyhan0@gmail.com</span>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Nama
            <input type="text" placeholder="Nama Anda" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email Anda" />
          </label>
          <label>
            Kebutuhan
            <textarea rows="5" placeholder="Jelaskan kebutuhan landing page Anda" />
          </label>
          <button type="submit" className="btn btn-primary">Konsultasi Gratis</button>
        </form>
      </section>
    </main>
  );
}
