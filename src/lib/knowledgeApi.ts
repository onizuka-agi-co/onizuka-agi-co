/**
 * AGI Knowledge Hub API Client
 * Connects to the local Knowledge Search API (localhost:8420)
 */

const API_BASE = '/api'; // proxied via vite.config.ts

export interface SearchResult {
  title: string;
  path: string;
  snippet: string;
  score: number;
  type: string;
  date?: string;
}

export interface SearchResponse {
  query: string;
  total: number;
  semantic: boolean;
  results: SearchResult[];
}

export interface StatsResponse {
  documents: {
    reports: number;
    papers: number;
    posts: number;
    total: number;
  };
  index: {
    total_documents: number;
    dimension: number;
    created: string;
  };
  faiss_exists: boolean;
}

export interface StatusResponse {
  status: string;
  service: string;
  version: string;
  timestamp: string;
}

export async function searchKnowledge(
  query: string,
  options?: { limit?: number; semantic?: boolean; type?: string }
): Promise<SearchResponse> {
  const params = new URLSearchParams({ q: query });
  if (options?.limit) params.set('limit', String(options.limit));
  if (options?.semantic) params.set('semantic', '1');
  if (options?.type) params.set('type', options.type);

  const res = await fetch(`${API_BASE}/search?${params}`);
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  return res.json();
}

export async function fetchStats(): Promise<StatsResponse> {
  const res = await fetch(`${API_BASE}/stats`);
  if (!res.ok) throw new Error(`Stats failed: ${res.status}`);
  return res.json();
}

export async function fetchStatus(): Promise<StatusResponse> {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error(`Status failed: ${res.status}`);
  return res.json();
}
