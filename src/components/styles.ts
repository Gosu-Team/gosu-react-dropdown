import { Placement } from "./types";

interface stylesProps {
  listPlacement: Placement
}
export const getStyles = ({ listPlacement }: stylesProps): Record<string, React.CSSProperties> => {
  const listPosition = () => {
    if (listPlacement === 'bottomLeft') {
      return { left: 0 }
    }

    if (listPlacement === 'bottomCenter') {
      return {
        left: '50%',
        transform: 'translate(-50%)'
      }
    }

    if (listPlacement === 'bottomRight') {
      return { right: 0 }
    }
  }

  return ({
    root: {
      position: "relative",
      width: 'fit-content'
    },
    trigger: {
      backgroundColor: 'transparent',
      border: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    listContainer: {
      position: 'absolute',
      top: '100%',
      marginTop: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      display: 'flex',
      flexDirection: 'column',
      ...listPosition()

    },
    listItem: {
      cursor: 'pointer',
      padding: '10px',
      background: 'none',
      border: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'left'
    }
  })
};
