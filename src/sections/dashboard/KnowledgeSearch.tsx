import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { searchKnowledge, type SearchResponse } from '../../lib/knowledgeApi';
import { Search, Loader2, FileText, BookOpen, MessageSquare } from 'lucide-react';

export default function KnowledgeSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [semantic, setSemantic] = useState(false);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await searchKnowledge(query, { limit: 10, semantic });
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }, [query, semantic]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const getTypeIcon = (type: string) => {
    if (type === 'paper' || type?.includes('paper')) return <BookOpen className="h-4 w-4 text-[#4CAF50]" />;
    if (type === 'x' || type?.includes('x')) return <MessageSquare className="h-4 w-4 text-[#2196F3]" />;
    return <FileText className="h-4 w-4 text-[#C41E3A]" />;
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      report: 'bg-[#C41E3A]/20 text-[#C41E3A]',
      paper: 'bg-[#4CAF50]/20 text-[#4CAF50]',
      x: 'bg-[#2196F3]/20 text-[#2196F3]',
    };
    const color = colors[type] || 'bg-zinc-700 text-zinc-300';
    return (
      <span className={`text-xs px-2 py-0.5 rounded-full ${color}`}>
        {type || 'doc'}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search AGI knowledge base... (e.g., 'transformer architecture', 'AGI safety')"
            className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[#C41E3A] transition-colors"
          />
        </div>
        <button
          onClick={() => setSemantic(!semantic)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            semantic
              ? 'bg-[#9C27B0] text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {semantic ? '🔮 Semantic' : '📝 Keyword'}
        </button>
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="px-6 py-3 bg-[#C41E3A] text-white rounded-lg font-medium hover:bg-[#a01830] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Search'}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-3">
          <div className="text-sm text-zinc-500">
            {results.total} result{results.total !== 1 ? 's' : ''} found
            {results.semantic ? ' (semantic search)' : ' (keyword search)'}
          </div>

          {results.results.length === 0 ? (
            <Card className="bg-zinc-900/80 border-zinc-800">
              <CardContent className="py-8 text-center text-zinc-500">
                No results found. Try a different query.
              </CardContent>
            </Card>
          ) : (
            results.results.map((result, i) => (
              <Card key={i} className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(result.type)}
                      <CardTitle className="text-sm text-zinc-200">{result.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTypeBadge(result.type)}
                      <span className="text-xs text-zinc-600">{result.score.toFixed(2)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 line-clamp-3 mb-2">{result.snippet}</p>
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <span>{result.path}</span>
                    {result.date && <span>• {result.date}</span>}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Placeholder */}
      {!results && !loading && (
        <Card className="bg-zinc-900/80 border-zinc-800">
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-lg text-zinc-400 mb-2">Search AGI Knowledge Base</h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto">
              Search across {85}+ documents including research papers, daily reports, X posts, and meeting notes.
              Toggle semantic search for concept-based matching.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {['AGI safety', 'transformer', 'multi-agent', 'knowledge graph', 'RAG'].map((q) => (
                <button
                  key={q}
                  onClick={() => { setQuery(q); }}
                  className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-xs hover:bg-zinc-700 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
