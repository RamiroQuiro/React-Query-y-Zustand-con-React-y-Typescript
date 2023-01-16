import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={59} cy={48} r={1} />
    <circle cx={9} cy={7} r={1} />
    <path d="M6.7 15.456a1 1 0 0 0-1.414 0l-.767.767-.767-.767a1 1 0 1 0-1.414 1.414l.767.767-.767.767a1 1 0 1 0 1.414 1.414l.767-.767.767.767A1 1 0 1 0 6.7 18.404l-.767-.767.767-.767a1 1 0 0 0 0-1.414ZM17 10a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3Zm0-4a1 1 0 1 1-1 1 1.001 1.001 0 0 1 1-1ZM32 11a24 24 0 1 0 24 24 24.027 24.027 0 0 0-24-24Zm0 46a22 22 0 1 1 22-22 22.025 22.025 0 0 1-22 22Z" />
    <path d="M28.045 28.43a1 1 0 0 0 .903.57H33a1 1 0 0 0 0-2h-1.955l2.732-3.37A1 1 0 0 0 33 22h-4a1 1 0 0 0 0 2h1.902l-2.731 3.37a1 1 0 0 0-.126 1.06ZM41 21h-1.955l2.732-3.37A1 1 0 0 0 41 16h-4a1 1 0 0 0 0 2h1.902l-2.731 3.37a1 1 0 0 0 .777 1.63H41a1 1 0 0 0 0-2ZM46.045 13.43a1 1 0 0 0 .903.57H51a1 1 0 0 0 0-2h-1.955l2.732-3.37A1 1 0 0 0 51 7h-4a1 1 0 0 0 0 2h1.902l-2.731 3.37a1 1 0 0 0-.126 1.06ZM27.956 36.61a1 1 0 0 0-1.912-.59 1.107 1.107 0 0 1-2.101.042 1 1 0 0 0-1.886.668 3.108 3.108 0 0 0 5.899-.12ZM41.294 35.36a.997.997 0 0 0-1.25.66 1.107 1.107 0 0 1-2.101.042 1 1 0 1 0-1.886.668 3.108 3.108 0 0 0 5.899-.12 1 1 0 0 0-.662-1.25ZM32 45c-2.89 0-6 .939-6 3s3.11 3 6 3 6-.939 6-3-3.11-3-6-3Z" />
  </svg>
)

export default SvgComponent
