
import { useEffect, useRef } from "react";
import "../components/Cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    class Cursor {
      constructor(cursor, dot) {
        this.root = document.body;
        this.cursor = cursor;
        this.dot = dot;

        this.pointerX = 0;
        this.pointerY = 0;
        this.cursorSize = 20;

        this.cursorStyle = {
          boxSizing: "border-box",
          position: "fixed",
          display: "flex",
          top: `${this.cursorSize / -2}px`,
          left: `${this.cursorSize / -2}px`,
          zIndex: "2147483647",
          justifyContent: "center",
          alignItems: "center",
          width: `${this.cursorSize}px`,
          height: `${this.cursorSize}px`,
          backgroundColor: "#fff0",
          boxShadow: "0 0 0 1.25px #1D1D1B, 0 0 0 2.25px #EFF1F0",
          borderRadius: "50%",
          transition: "200ms, transform 100ms",
          userSelect: "none",
          pointerEvents: "none",
        };

        this.dotStyle = {
          boxSizing: "border-box",
          position: "fixed",
          zIndex: "2147483647",
          width: "4px",
          height: "4px",
          backgroundColor: "#292927",
          boxShadow: "0 0 0 1px #EFF1F0",
          borderRadius: "50%",
          userSelect: "none",
          pointerEvents: "none",
        };

        this.init(this.cursor, this.cursorStyle);
        this.init(this.dot, this.dotStyle);
      }

      init(el, style) {
        Object.assign(el.style, style);
        setTimeout(() => {
          this.cursor.removeAttribute("hidden");
        }, 500);
        this.cursor.style.opacity = 1;
      }

      move(event) {
        if (
          event.target.localName === "svg" ||
          event.target.localName === "a" ||
          event.target.onclick !== null ||
          Array.from(event.target.classList).includes("curzr-hover")
        ) {
          this.hover(40);
        } else {
          this.hoverout();
        }

        this.pointerX = event.pageX + this.root.getBoundingClientRect().x;
        this.pointerY = event.pageY + this.root.getBoundingClientRect().y;

        this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
      }

      hover(radius) {
        this.cursor.style.width = this.cursor.style.height = `${radius}px`;
        this.cursor.style.top = this.cursor.style.left = `${radius / -2}px`;
      }

      hoverout() {
        this.cursor.style.width = this.cursor.style.height = `${this.cursorSize}px`;
        this.cursor.style.top = this.cursor.style.left = `${this.cursorSize / -2}px`;
      }

      click() {
        this.cursor.style.transform += ` scale(0.75)`;
        setTimeout(() => {
          this.cursor.style.transform = this.cursor.style.transform.replace(
            ` scale(0.75)`,
            ""
          );
        }, 35);
      }

      hidden() {
        this.cursor.style.opacity = 0;
        setTimeout(() => {
          this.cursor.setAttribute("hidden", "hidden");
        }, 500);
      }
    }

    const cursor = new Cursor(cursorRef.current, dotRef.current);

    const handleMouseMove = (e) => cursor.move(e);
    const handleMouseClick = () => cursor.click();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="curzr-ring-dot" ref={cursorRef} hidden>
      <div className="curzr-dot" ref={dotRef}></div>
    </div>
  );
}
