export default function Logo({ className }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.34em"
      height="1em"
      viewBox="0 0 32 24"
      className={className}
    >
      <g fill="none">
        <path
          fill="#f7fcff"
          fillRule="evenodd"
          d="M0 0v24h32V0z"
          clipRule="evenodd"
        />
        <mask
          id="SVGcFaS5cXn"
          width="32"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v24h32V0z"
            clipRule="evenodd"
          />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#SVGcFaS5cXn)">
          <path fill="#e31d1c" d="M0 0v8h32V0z" />
          <path fill="#3d58db" d="M0 16v8h32v-8z" />
        </g>
      </g>
    </svg>
  );
}
