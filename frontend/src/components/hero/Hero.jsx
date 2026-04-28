import { useRef, useEffect } from 'react'
import heroWomanVideo from '../../assets/videos/hero-woman.webm'
import heroBg from '../../assets/videos/hero1.mp4'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4
    }
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: '100vh', minHeight: '580px' }}
    >
      {/* ─── FULLSCREEN BACKGROUND VIDEO ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={heroBg} type="video/mp4" />
        </video>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/*
       * ─── RIGHT SIDE SHAPE (Screenshot 1) ────────────────────────────────
       * Two stacked black bars on the far right edge.
       *
       * TOP part: thin strip (~22px wide), runs from top to ~35% height
       * BOTTOM part: wider block (~72px wide), curved top-left corner only
       *   The visual "concave notch" between them comes naturally from the
       *   wider block having borderRadius on its top-left.
       */}

      {/* Thin right strip — top portion */}
      <div
        className="absolute top-0 right-0 bg-black pointer-events-none"
        style={{ width: '22px', height: '38%', zIndex: 10 }}
      />

      {/* Wide right block — bottom portion, sharp 'thorn' top-left */}
      <div
        className="absolute right-0 bg-black pointer-events-none"
        style={{
          width: '72px',
          top: '38%',
          bottom: '100px',
          /* Creates a sharp diagonal from the thin bar width (22px) down to thick bar width (72px) */
          clipPath: 'polygon(100% 0, 50px 0, 0 100px, 0 100%, 100% 100%)',
          zIndex: 10,
        }}
      />



      {/*
       * ─── GECKO + SUBTITLE — left zone, vertically centered ──────────────
       */}
      <div
        className="absolute inset-0 z-20 flex items-center"
        style={{
          paddingTop: '48px',
          paddingBottom: '100px',
          paddingLeft: '8%',
          paddingRight: '43%',
        }}
      >
        <div className="flex flex-col items-center w-full">
          <h1
            className="font-audiowide text-black leading-none text-center"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)', letterSpacing: '0.15em' }}
          >
            GECKO
          </h1>
          <p
            className="font-sans text-black text-center mt-4"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)', letterSpacing: '0.08em' }}
          >
            Built for the Ascent.
          </p>
        </div>
      </div>

      {/*
       * ─── BOTTOM BLACK BAR ───────────────────────────────────────────────
       * Full width, 100px height, z-40 (under the woman who overlaps it)
       */}
      <div
        className="absolute bottom-0 left-0 w-full bg-black z-40 flex items-center justify-center"
        style={{ height: '100px' }}
      >
        <h2
          className="font-audiowide text-white text-center"
          style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.5rem)', letterSpacing: '0.05em' }}
        >
          Built For the Ascent
        </h2>
      </div>

    </section>
  )
}

export default Hero
