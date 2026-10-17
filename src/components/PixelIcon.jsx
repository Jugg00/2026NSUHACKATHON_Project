// Each path draws an icon using straight lines and square edges.
const iconPaths = {
  search:
    'M4 2h10v2h2v2h2v8h-2v2h-2v2H6v-2H4v-2H2V6h2V2zm2 4v8h8V6H6zm10 10h4v4h2v2h-4v-2h-2v-4',

  map:
    'M2 4h6v2h8V4h6v16h-6v-2H8v2H2V4zm2 2v12h2V6H4zm6 2v8h4V8h-4zm8-2v12h2V6h-2',

  agenda:
    'M5 2h3v3h8V2h3v3h3v17H2V5h3V2zm0 8v9h14v-9H5zm2 2h3v3H7v-3zm5 0h3v3h-3v-3',

  saved:
    'M5 2h14v20l-7-5-7 5V2zm3 3v11l4-3 4 3V5H8',

  chat:
    'M2 3h20v14H10v2H7v2H4v-4H2V3zm3 3v8h14V6H5zm2 3h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9',
}

function PixelIcon({ name }) {
  return (
    // The nearby heading names the feature, so hide this decoration
    // from screen readers.
    <span className="pixel-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d={iconPaths[name]} />
      </svg>
    </span>
  )
}

export default PixelIcon