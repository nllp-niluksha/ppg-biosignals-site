/* Animated ECG strip — pure CSS animation, no client JS needed */
export default function EcgWave() {
  const beat = "M0,36 L20,36 L24,36 L26,10 L28,60 L30,12 L32,36 L36,36 L60,36";
  const xs = Array.from({ length: 12 }, (_, i) => i * 60);

  return (
    <div className="ecg-wrap" aria-hidden="true">
      <svg className="ecg-strip" viewBox="0 0 720 72" preserveAspectRatio="none">
        {[0, 720].map((offset) => (
          <g key={offset} transform={`translate(${offset},0)`}>
            {xs.map((x) => (
              <path
                key={x}
                d={beat}
                transform={`translate(${x},0)`}
                stroke="#2196f3"
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
