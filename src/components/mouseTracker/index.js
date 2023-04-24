import { useState, useEffect } from 'react';

export default function MouseTracker() {
    const [pointerPosition, setPointerPosition] = useState({
        x: null,
        y: null
    });

    useEffect(() => {
        function updateMousePosition(env) {
            setPointerPosition({ x: env.clientX, y: env.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return pointerPosition;
};
