import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * -----------
 * Why this is needed:
 *   React Router v5 uses client-side navigation — when you navigate to a new
 *   route, the browser does NOT scroll to the top because no real page load
 *   happens. Without this, users arrive at /rooms/:slug mid-page from wherever
 *   they scrolled to on the previous page.
 *
 * How it works:
 *   - useLocation() returns the current location object.
 *   - When the pathname changes (i.e. user navigates), the effect fires and
 *     calls window.scrollTo(0, 0), snapping the view to the top.
 *   - Returns null — this is a behavior-only component with no UI output.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
