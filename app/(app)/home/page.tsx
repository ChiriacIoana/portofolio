'use client';
import { useEffect, useRef } from "react";

function HomePage() {
  const elementsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    elementsRef.current = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#131316] text-white font-roboto">
      <section className="min-h-screen grid place-items-center reveal">
        <div className="text-center">
          <h1 className="text-4xl font-bold">hi mom</h1>
          <p className="mt-2">this is my website</p>
        </div>
      </section>

      <section className="min-h-screen grid place-items-center reveal">
        <div className="text-center">
          <h2 className="text-3xl font-bold">hire me pls</h2>
          <p className="mt-2">please hire me</p>
        </div>
      </section>

      <section className="min-h-screen grid place-items-center reveal">
        <div className="text-center">
          <p className="mb-8 text-xl">google hire me</p>

          <div className="flex flex-wrap justify-center gap-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`reveal logo-delay-${i}`}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="w-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
