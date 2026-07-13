import styles from "./GridLines.module.css";

export default function GridLines({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  return (
    <div className={hideOnMobile ? styles.hideOnMobile : undefined} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 1340, margin: "0 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        <div style={{ borderLeft: "1px solid rgba(16,24,38,.045)" }} />
        <div style={{ borderLeft: "1px solid rgba(16,24,38,.045)" }} />
        <div style={{ borderLeft: "1px solid rgba(16,24,38,.045)" }} />
        <div style={{ borderLeft: "1px solid rgba(16,24,38,.045)", borderRight: "1px solid rgba(16,24,38,.045)" }} />
      </div>
    </div>
  );
}
