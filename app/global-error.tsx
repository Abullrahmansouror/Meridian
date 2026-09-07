"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#1a1c1e",
          color: "#fbfaf7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main style={{ maxWidth: 760, margin: "0 auto", padding: "20vh 24px" }}>
          <p style={{ color: "#df6425", fontWeight: 700 }}>MERIDIAN · ERROR</p>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1 }}>
            Something went wrong.
          </h1>
          <p style={{ color: "#edebe6", fontSize: "1.125rem", lineHeight: 1.6 }}>
            Retry the page. If the problem continues, contact the Meridian team.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              minHeight: 48,
              border: 0,
              padding: "0 24px",
              background: "#df6425",
              color: "#1a1c1e",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
