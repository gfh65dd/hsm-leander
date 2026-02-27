import video from '../images/catering.mp4';

export default function VideoText() {
  return (
    <section className="relative py-20 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="relative">
            <h2 className="video-text-container text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center leading-tight">
              <span className="video-text-stroke">
                HYDERABADI
              </span>
              <br />
              <span className="video-text-stroke">
                SPICY MATKA
              </span>
              <br />
              <span className="video-text-stroke">
                LEANDER
              </span>
            </h2>
            <div className="absolute inset-0 overflow-hidden video-text-mask">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
