import { Placement } from "./types";

interface stylesProps {
  listPlacement: Placement
  styleRoot?: React.CSSProperties
  styleTrigger?: React.CSSProperties
  styleOption?: React.CSSProperties
  styleList?: React.CSSProperties
}
export const getStyles = ({
  listPlacement,
  styleRoot,
  styleTrigger,
  styleOption,
  styleList
}: stylesProps): Record<string, React.CSSProperties> => {
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
      width: 'fit-content',
      ...styleRoot,
    },
    trigger: {
      backgroundColor: styleTrigger?.backgroundColor ? undefined : 'transparent',
      border: styleTrigger?.border ? undefined : '0',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      ...styleTrigger
    },
    list: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: styleList?.top ? undefined : '100%',
      marginTop: styleList?.marginTop ? undefined : '10px',
      backgroundColor: styleList?.backgroundColor ? undefined : '#fff',
      ...listPosition(),
      ...styleList
    },
    option: {
      cursor: 'pointer',
      padding: '10px',
      background: 'none',
      border: 'none',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      ...styleOption
    }
  })
};
