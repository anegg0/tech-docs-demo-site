import React from 'react';

const Python = ({ color = '#FFD845', ...rest }) => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M35.442 45.9H57.75c6.21 0 11.101-5.254 11.101-11.49V13.145c0-6.053-5.073-10.6-11.135-11.61-3.835-.638-7.799-.93-11.618-.91-3.817.017-7.353.342-10.56.91C26.085 3.204 24.48 6.7 24.48 13.145v8.275h22.185v3.06H15.894c-6.49 0-12.175 3.908-13.952 11.33-2.05 8.507-2.142 13.708 0 22.59 1.588 6.612 5.378 11.215 11.87 11.215h7.608v-9.982c0-7.372 6.447-13.733 14.022-13.733zm-1.406-29.92c-2.315 0-4.19-1.896-4.19-4.241 0-2.356 1.875-4.27 4.19-4.27 2.307 0 4.192 1.914 4.192 4.27-.001 2.345-1.886 4.242-4.192 4.242zM91.25 35.81c-1.605-6.462-4.669-11.33-11.168-11.33H71.91v9.93c0 7.689-6.727 13.785-14.16 13.785H35.441c-6.11 0-10.962 5.604-10.962 11.724v21.267c0 6.052 5.16 9.612 11.063 11.348 7.07 2.079 13.766 2.455 22.224 0C63.39 90.906 68.85 87.63 68.85 81.186v-8.511H46.665v-3.06h33.417c6.49 0 8.91-4.419 11.168-11.215 2.33-6.996 2.23-13.616 0-22.59zM59.154 78.35c2.316 0 4.192 1.896 4.192 4.243 0 2.354-1.875 4.268-4.192 4.268-2.306 0-4.19-1.914-4.19-4.268 0-2.347 1.884-4.243 4.19-4.243z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
);

export default Python;
