import { useEffect } from "react";

type HeadTags = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useDocumentHead(tags: HeadTags) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = tags.title;
    upsertMeta("name", "description", tags.description);
    upsertLink("canonical", tags.canonical);
    upsertMeta("property", "og:title", tags.ogTitle ?? tags.title);
    upsertMeta("property", "og:description", tags.ogDescription ?? tags.description);
    upsertMeta("property", "og:url", tags.ogUrl ?? tags.canonical);
    upsertMeta("property", "og:type", tags.ogType ?? "website");
    return () => {
      document.title = prevTitle;
    };
  }, [tags.title, tags.description, tags.canonical, tags.ogTitle, tags.ogDescription, tags.ogUrl, tags.ogType]);
}
