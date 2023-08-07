const ArrowSvg = ({ left }: { left: boolean }) => {
  const arrowStyle = left ? { transform: "rotate(180deg)" } : {};

  return (
    <div style={arrowStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="9" viewBox="0 0 19 9" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2888 0.646447C14.0935 0.451184 13.7769 0.451184 13.5817 0.646447C13.3864 0.841709 13.3864 1.15829 13.5817 1.35355L16.2281 4H1.43521C1.15907 4 0.935211 4.22386 0.935211 4.5C0.935211 4.77614 1.15907 5 1.43521 5H16.2281L13.5817 7.64645C13.3864 7.84171 13.3864 8.15829 13.5817 8.35355C13.7769 8.54882 14.0935 8.54882 14.2888 8.35355L18.1423 4.5L14.2888 0.646447Z"/>
      </svg>
    </div>
  )
}

export default ArrowSvg