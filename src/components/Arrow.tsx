import React from 'react';

interface ArrowProps {
  isOpen: boolean;
  caretColor: string
}

export const Arrow: React.FC<ArrowProps> = ({ isOpen, caretColor }) => {
  const styles: Record<string, React.CSSProperties> = {
    arrow: {
      width: "6px",
      height: "6px",
      transform: isOpen ? "rotate(135deg)" : "rotate(315deg)",
      borderBottom: `1px solid ${caretColor}`,
      borderLeft: `1px solid ${caretColor}`,
      ...(isOpen ?
        { marginTop: '4px' } :
        { marginBottom: '4px' })

    },
  };

  return (
    <div style={styles.arrow} />
  );
};

export default Arrow;
