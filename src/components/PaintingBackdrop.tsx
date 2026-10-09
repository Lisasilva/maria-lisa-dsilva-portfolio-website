type PaintingBackdropProps = {
  src: string;
  side?: "full" | "center" | "left" | "right";
  position?: string;
};

// Full class names so Tailwind keeps them in the build
const sideClass = {
  full: "",
  center: "painting-backdrop--center",
  left: "painting-backdrop--left",
  right: "painting-backdrop--right",
};

// Painting behind a section, drawn as a CSS background (not an <img>) so it can't be
// right-click saved or dragged out. The section must be `relative` and its content `relative z-10`.
const PaintingBackdrop = ({ src, side = "full", position = "center" }: PaintingBackdropProps) => (
  <div
    aria-hidden="true"
    className={`painting-backdrop ${sideClass[side]}`}
    onContextMenu={(e) => e.preventDefault()}
  >
    <div
      className="painting-backdrop__art"
      style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
    />
  </div>
);

export default PaintingBackdrop;
