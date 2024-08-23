import { useEffect, useRef } from "react";
import "../components/Cursor.css";

export default function CircleCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        class CircleCursor {
            constructor(cursor, dot) {
                this.root = document.body;
                this.cursor = cursor;
                this.circle = cursor.querySelector(".circle");
                this.dot = dot;

                this.pointerX = 0;
                this.pointerY = 0;
                this.cursorSize = 50;

                this.circleStyle = {
                    boxSizing: 'border-box',
                    position: 'fixed',
                    top: `${this.cursorSize / -2}px`,
                    left: `${this.cursorSize / -2}px`,
                    zIndex: '2147483647',
                    width: `${this.cursorSize}px`,
                    height: `${this.cursorSize}px`,
                    backgroundColor: '#fff0',
                    borderRadius: '50%',
                    transition: '500ms, transform 100ms',
                    userSelect: 'none',
                    pointerEvents: 'none'
                };

                this.dotStyle = {
                    boxSizing: 'border-box',
                    position: 'fixed',
                    zIndex: '2147483647',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#0000',
                    borderRadius: '50%',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    transition: '250ms, transform 75ms'
                };

                if (CSS.supports("backdrop-filter", "invert(1) grayscale(1)")) {
                    this.circleStyle.backdropFilter = 'invert(0.85) grayscale(1)';
                    this.dotStyle.backdropFilter = 'invert(1)';
                    this.circleStyle.backgroundColor = '#fff0';
                } else {
                    this.circleStyle.backgroundColor = '#000';
                    this.circleStyle.opacity = '0.5';
                }

                this.init(this.circle, this.circleStyle);
                this.init(this.dot, this.dotStyle);
            }

            init(el, style) {
                if (el) {
                    Object.assign(el.style, style);
                    setTimeout(() => {
                        this.cursor.removeAttribute("hidden");
                    }, 500);
                    this.cursor.style.opacity = 1;
                } else {
                    console.error('Element is null, cannot apply styles.');
                }
            }

            move(event) {
                this.pointerX = event.pageX;
                this.pointerY = event.pageY + this.root.getBoundingClientRect().y;

                if (this.circle && this.dot) {
                    this.circle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
                    this.dot.style.transform = `translate3d(calc(-50% + ${this.pointerX}px), calc(-50% + ${this.pointerY}px), 0)`;

                    if (event.target.localName === 'svg' ||
                        event.target.localName === 'a' ||
                        event.target.onclick !== null ||
                        Array.from(event.target.classList).includes('curzr-hover')) {
                        this.hover();
                    }
                }
            }

            hover() {
                if (this.circle) {
                    this.circle.style.transform += ` scale(2.5)`;
                }
            }

            click() {
                if (this.circle) {
                    this.circle.style.transform += ` scale(0.75)`;
                    setTimeout(() => {
                        this.circle.style.transform = this.circle.style.transform.replace(` scale(0.75)`, '');
                    }, 35);
                }
            }

            hidden() {
                if (this.cursor) {
                    this.cursor.style.opacity = 0;
                    setTimeout(() => {
                        this.cursor.setAttribute("hidden", "hidden");
                    }, 500);
                }
            }
        }

        const circleCursor = new CircleCursor(cursorRef.current, dotRef.current);
        document.addEventListener('mousemove', (e) => circleCursor.move(e));
        document.addEventListener('click', () => circleCursor.click());

        return () => {
            document.removeEventListener('mousemove', (e) => circleCursor.move(e));
            document.removeEventListener('click', () => circleCursor.click());
        };
    }, []);

    return (
        <>
            <div className="curzr-big-circle" hidden>
                <div className="circle" ref={cursorRef}></div>
                <div className="dot" ref={dotRef}></div>
            </div>
        </>
    );
}
