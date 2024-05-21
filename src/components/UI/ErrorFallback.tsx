import React, { ComponentType } from "react";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback: ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.log(error);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center">
        <h1>Something went wrong</h1>
        <p>{error}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
};
