import React, { useEffect, useRef, useMemo } from "react";

const PageBackground: React.FC = () => {
    const blobRefs = useRef<HTMLDivElement[]>([]);
    
    const initialPositions = useMemo(() => [
        // These are offsets from their CSS starting positions
        { x: -80, y: -50 }, // Blob 0 (Top-left purple)
        { x: 80, y: -60 },  // Blob 1 (Top-right cyan)
        { x: -100, y: 70 }, // Blob 2 (Bottom-left blue)
        { x: 120, y: 60 },  // Blob 3 (Bottom-right blue)
    ], []);

    useEffect(() => {
        let requestId: number;

        const animateBlobs = () => {
            const newScroll = window.pageYOffset;

            blobRefs.current.forEach((blob, index) => {
                if (!blob) return;
                const initialPos = initialPositions[index];
                if (!initialPos) return;

                // Refined parameters for a smoother, drifty feel
                const xSensitivity = 120;
                const ySensitivity = 150;
                const xAmplitude = 250;
                const yAmplitude = 150;
                const transitionDuration = "1.2s";

                // Adding a slight variation per blob for more organic movement
                const phaseShift = index * 0.7; // Increased phase shift
                const speedFactor = 1 + (index % 2 === 0 ? 0.1 : -0.05); // Slight speed variation

                const xOffset = Math.sin(newScroll / (xSensitivity * speedFactor) + phaseShift) * xAmplitude; 
                const yOffset = Math.cos(newScroll / (ySensitivity * speedFactor) + phaseShift) * yAmplitude; 

                const x = initialPos.x + xOffset;
                const y = initialPos.y + yOffset;

                blob.style.transform = `translate(${x}px, ${y}px)`;
                blob.style.transition = `transform ${transitionDuration} ease-out`;
            });

            requestId = requestAnimationFrame(animateBlobs);
        };

        requestId = requestAnimationFrame(animateBlobs);

        return () => {
            cancelAnimationFrame(requestId);
        };
    }, [initialPositions]);

    return (
        <div className="fixed inset-0 bg-[#0B0B1E] -z-10 overflow-hidden">
            <div className="absolute inset-0">
                {/* Blob 1 (Purple) */}
                <div
                    ref={(el) => el && (blobRefs.current[0] = el)}
                    className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
                {/* Blob 2 (Cyan - top-right) */}
                <div
                    ref={(el) => el && (blobRefs.current[1] = el)}
                    className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
                {/* Blob 3 (Blue - bottom-left) */}
                <div
                    ref={(el) => el && (blobRefs.current[2] = el)}
                    className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
                {/* Blob 4 (Blue - bottom-right) */}
                <div
                    ref={(el) => el && (blobRefs.current[3] = el)}
                    className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
            </div>
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
    );
};

export default PageBackground;