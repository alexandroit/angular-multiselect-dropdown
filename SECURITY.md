# Security Policy

## Supported versions

The current Angular 22 release line receives active security fixes. Older Angular-major lines are retained for compatibility and are assessed case by case.

The maintained Angular 22 documentation application has a checked-in lockfile,
uses `npm ci`, and must pass a zero-finding dependency audit in CI. Historical
examples are validated as immutable fixtures and are never installed or
published.

## Reporting a vulnerability

Please use [GitHub private vulnerability reporting](https://github.com/alexandroit/angular-multiselect-dropdown/security/advisories/new). Do not disclose a suspected vulnerability in a public issue before a fix is available.

Include the affected package version, Angular version, a minimal reproduction, and the expected impact. Reports involving untrusted settings or template context data should state how that data reaches the component.

The package ignores the object keys `__proto__`, `prototype`, and `constructor` when merging settings or template contexts. Applications should still treat templates and executable callbacks as trusted code.
