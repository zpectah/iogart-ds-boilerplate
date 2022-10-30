import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <div>
            <h1
              style={{
                fontSize: '2.25rem',
              }}
            >
              Application Error
            </h1>
            <p>
              We're sorry, but unfortunately there was a problem with the app. You can try reloading the page or clearing the
              browser cache. If problems persist, contact your administrator.
            </p>
            {this.state.error && (
              <div>
                <pre>
                  <code>{JSON.stringify(this.state.error, null, 2)}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
