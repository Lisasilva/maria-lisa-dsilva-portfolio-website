// A fresh request URL prevents PDF viewers from reusing a cached resume.
export const getResumeHref = () => `/resume.pdf?v=${Date.now()}`;