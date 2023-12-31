export const VideoCallIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  size?: string;
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71L17 10.5z"
    ></path>
  </svg>
);

export const DashboardIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm3.833 3.337a.596.596 0 0 1 .763.067a.59.59 0 0 1 .063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602ZM17.5 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-11 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm2.318-3.596a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414ZM12 5.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
    ></path>
  </svg>
);

export const StoreIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M5 4h14q.425 0 .713.288T20 5q0 .425-.288.713T19 6H5q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4Zm0 16q-.425 0-.713-.288T4 19v-5h-.175q-.475 0-.775-.363t-.2-.837l1-5q.075-.35.35-.575T4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837t-.775.363H20v5q0 .425-.288.713T19 20q-.425 0-.713-.288T18 19v-5h-4v5q0 .425-.288.713T13 20H5Zm1-2h6v-4H6v4Zm-.95-6h13.9h-13.9Zm0 0h13.9l-.6-3H5.65l-.6 3Z"
    ></path>
  </svg>
);

export const StoreAddIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M20 6H4V4h16v2m-4.31 8H14v1.69c-.63.95-1 2.08-1 3.31c0 .34.04.67.09 1H4v-6H3v-2l1-5h16l1 5v1.35c-.63-.22-1.3-.35-2-.35c-1.23 0-2.36.37-3.31 1M12 14H6v4h6v-4m6.96-2l-.6-3H5.64l-.6 3h13.92M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"
    ></path>
  </svg>
);

export const BotIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M1 18q.225-2.675 1.638-4.925T6.4 9.5L4.55 6.3q-.15-.225-.075-.475T4.8 5.45q.2-.125.45-.05t.4.3L7.5 8.9Q9.65 8 12 8t4.5.9l1.85-3.2q.15-.225.4-.3t.45.05q.25.125.325.375t-.075.475L17.6 9.5q2.35 1.325 3.762 3.575T23 18H1Zm6-2.75q.525 0 .888-.363T8.25 14q0-.525-.363-.888T7 12.75q-.525 0-.888.363T5.75 14q0 .525.363.888T7 15.25Zm10 0q.525 0 .888-.363T18.25 14q0-.525-.363-.888T17 12.75q-.525 0-.888.363T15.75 14q0 .525.363.888t.887.362Z"
    ></path>
  </svg>
);

export const LogoutIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22Zm7-6v-3h-8v-2h8V8l5 4l-5 4Z"
    ></path>
  </svg>
);

export const DiagnosisIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className,
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M16.125 3q2.5 0 4.188 1.85T22 9.25q0 .45-.05.888t-.175.862h-6.25l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.588.2t-.362.5l-1.35 4.05l-.875-1.3q-.125-.2-.35-.325T9 11H2.225q-.125-.425-.175-.863T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3ZM12 21q-.45 0-.863-.163t-.737-.487l-6.7-6.725q-.15-.15-.275-.3T3.175 13H8.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h5.8l-.25.3l-.25.3l-6.725 6.75q-.325.325-.725.488T12 21Z"
    ></path>
  </svg>
);

export const AddIcon = ({
  color = "currentColor",
  size = "1.5rem",
}: {
  color?: string;
  size?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill={color} d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path>
  </svg>
);

export const LoaderIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={color}
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".25"
    ></path>
    <path
      fill={color}
      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
    >
      <animateTransform
        attributeName="transform"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      ></animateTransform>
    </path>
  </svg>
);

export const RequestIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 32 32"
  >
    <path fill={color} d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path>
    <path
      fill={color}
      d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2l-1.1 1.7z"
    ></path>
  </svg>
);

export const HomeIcon = ({
  color = "currentColor",
  size = "1.25rem",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.713-.288T14 20v-5q0-.425-.288-.713T13 14h-2q-.425 0-.713.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.413-.588T4 19Z"
    ></path>
  </svg>
);

export const CheckIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
    ></path>
  </svg>
);

export const CrossIcon = ({
  color = "currentColor",
  size = "1.5rem",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 15 15"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
      clipRule="evenodd"
    ></path>
  </svg>
);
