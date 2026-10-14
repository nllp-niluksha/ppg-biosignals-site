import Reveal from "@/components/Reveal";
import EcgWave from "@/components/EcgWave";

const METRICS = [
  {
    icon: "♥",
    color: "#ef5350",
    label: "Heart Rate",
    val: "72",
    unit: "bpm",
    desc: "Resting heart rate derived from PPG peak-to-peak intervals, filtered and averaged over your session.",
  },
  {
    icon: "〜",
    color: "#2196f3",
    label: "Respiratory Rate",
    val: "16",
    unit: "br/min",
    desc: "Breathing rate extracted from the low-frequency amplitude modulation of the PPG waveform.",
  },
  {
    icon: "O₂",
    color: "#26a69a",
    label: "SpO₂",
    val: "98",
    unit: "%",
    desc: "Peripheral oxygen saturation estimated from the ratio of red and green channel PPG signals.",
  },
  {
    icon: "∿",
    color: "#7e57c2",
    label: "HRV",
    val: "45",
    unit: "ms",
    desc: "Heart rate variability (RMSSD) — a key marker of autonomic nervous system balance and recovery.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Add a patient profile",
    body: "Create a profile in seconds. Name, age, and nothing else — no account, no cloud sign-in.",
  },
  {
    n: "02",
    title: "Place your fingertip on the camera",
    body: "Cover the lens and flash with your fingertip. The app captures light passing through your skin.",
  },
  {
    n: "03",
    title: "Get results in 30 seconds",
    body: "The signal is processed on-device. Heart rate, respiratory rate, SpO₂ and HRV — all at once.",
  },
];

const PRIVACY = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 5v5c0 4.4 3 8.5 7 9.5C17 18.5 20 14.4 20 10V5l-7-3z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Stays on your device",
    body: "All signal processing runs locally. Your readings are never sent to a server.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "No account required",
    body: "No email, no password, no tracking. Open the app and start measuring.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12M4 8h8M4 12h10M4 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Export anytime",
    body: "Your session data is yours. Export a full CSV of raw and processed signals whenever you want.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "30-second sessions",
    body: "Short, purposeful readings. No long-term monitoring, no background data collection.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero">
        {/*
          HIGGSFIELD VIDEO — drop your generated .mp4 into /public/media/hero.mp4
          Suggested prompt:
          "Fingertip pressed gently on phone camera lens, soft blue-red pulse of light
          glowing through skin, ultra-macro, dark background, cinematic slow motion, 4K"
        */}
        <video
          className="hero__video"
          src="/media/hero.mp4"
          autoPlay muted loop playsInline
          aria-hidden="true"
        />
        <div className="hero__fallback" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="wrap hero__in">
          <p className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" style={{ marginRight: "0.6rem" }} />
            Clinical-grade vitals. No wearable.
          </p>
          <h1 className="hero__h">
            Measure what matters.<br />
            <em>In 30 seconds.</em>
          </h1>
          <p className="hero__lead">
            PPG Biosignals turns your phone camera into a physiological monitor.
            Heart rate, respiratory rate, SpO₂ and HRV — processed entirely on your device.
          </p>
          <div className="hero__cta">
            <a href="#download" className="btn btn--blue">Get the app — free</a>
            <a href="#how-it-works" className="link">See how it works ↓</a>
          </div>
          <p className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.6 3.5L7 9.5 3.9 11l.6-3.5L2 5l3.5-.5L7 1z"
                fill="#2196f3" />
            </svg>
            All signal processing runs on-device. Nothing is uploaded.
          </p>
        </div>
      </section>

      {/* ─── ECG strip ─── */}
      <EcgWave />

      {/* ─── Statement ─── */}
      <section className="section statement">
        <div className="wrap">
          <Reveal>
            <p className="statement__p">
              Not a fitness tracker. Not a smartwatch.{" "}
              <em>A clinical tool</em> that lives in the phone you already carry —
              measuring the signals your body is already sending.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section id="how-it-works" className="section section--tint">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2>Three steps to your vitals</h2>
              <p className="lead">
                Photoplethysmography (PPG) measures the volumetric changes in blood flow
                by detecting tiny variations in light absorbed by your skin.
              </p>
            </Reveal>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 80}>
                <div className="step__n"><span>{s.n}</span></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Metrics ─── */}
      <section id="metrics" className="section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <p className="eyebrow">What you measure</p>
              <h2>Four vitals. One session.</h2>
              <p className="lead">
                Each metric is computed from the same 15–60 second PPG recording,
                using bandpass filters, cubic spline interpolation, and peak detection
                — all running locally in real time.
              </p>
            </Reveal>
          </div>
          <div className="metrics">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} className="metric" delay={i * 60}>
                <div
                  className="metric__icon"
                  style={{ background: `${m.color}20`, color: m.color, fontSize: "1.25rem" }}
                >
                  {m.icon}
                </div>
                <div className="metric__label">{m.label}</div>
                <div className="metric__val">
                  {m.val}<span>{m.unit}</span>
                </div>
                <p className="metric__desc">{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── App mockups ─── */}
      <section className="section section--tint mockups-section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <p className="eyebrow">The app</p>
              <h2>Built for clarity.</h2>
              <p className="lead">
                Live PPG chart during recording. Clean results view with all four metrics.
                Session history per patient. Export whenever you need it.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="mockups">
              {/*
                SCREENSHOTS — drop your app screenshots into /public/media/
                  screen-1.png → Recording / chart view
                  screen-2.png → Results view
                  screen-3.png → Patient list
                Suggested Higgsfield prompt for background:
                "Phone screen showing a glowing blue ECG/PPG waveform on dark background,
                hand holding device, soft clinical light, product photography, 4K"
              */}
              {[
                { file: "screen-1.png", label: "Patient profiles", tall: false },
                { file: "screen-2.png", label: "Live PPG recording", tall: true },
                { file: "screen-3.png", label: "Results — HR, RR, SpO₂, HRV", tall: false },
              ].map((s) => (
                <div key={s.file} className={`phone-frame${s.tall ? " phone-frame--tall" : ""}`}>
                  <img
                    src={`/media/${s.file}`}
                    alt={s.label}
                    className="phone-screen"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Privacy ─── */}
      <section id="privacy" className="section">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <p className="eyebrow">Privacy by design</p>
              <h2>Your data stays with you.</h2>
            </Reveal>
          </div>
          <div className="privacy-grid">
            {PRIVACY.map((p, i) => (
              <Reveal key={p.title} className="priv-item" delay={i * 60}>
                <div className="priv-item__icon">{p.icon}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="download" className="section cta-section">
        <div className="cta-section__bg" aria-hidden="true" />
        <div className="wrap cta-section__in">
          <Reveal>
            <p className="eyebrow">Get started</p>
            <h2>Try it. Free. No sign-up.</h2>
            <p className="lead">
              Available now. All you need is your phone and 30 seconds.
            </p>
            <div className="cta-section__btns">
              <a href="#" className="btn btn--blue">Download for iOS</a>
              <a href="#" className="btn btn--outline">Download for Android</a>
            </div>
            <p className="fine" style={{ marginTop: "1.5rem" }}>
              Requires iOS 14+ or Android 8+. Camera permission required.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
