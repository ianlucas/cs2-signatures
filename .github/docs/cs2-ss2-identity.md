# cs2-ss2-identity 

Last updated: January 7, 2026 at 4:36:33 PM UTC

* Manifests: [8348690621754004818](https://steamdb.info/depot/2347770/history/?changeid=M:8348690621754004818), [3970280707550781410](https://steamdb.info/depot/2347771/history/?changeid=M:3970280707550781410), [8128465550651630543](https://steamdb.info/depot/2347773/history/?changeid=M:8128465550651630543)
* Repository: https://github.com/ianlucas/cs2-ss2-identity
* Gamedata: https://github.com/ianlucas/cs2-ss2-identity/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSPlayerController::SetPlayerName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\xBA
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 BA
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\x85\xD2\x74\x2A\x48\x89\x5C\x24
</pre>
</td><td>
<pre>
48 83 EC ? 48 85 D2 74 ? 48 89 5C 24
</pre>
</td></tr></table>

### CCSPlayerController::m_iCompetitiveRankTypePatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x44\x88\xBB\x2A\x2A\x2A\x2A\x48\x8B\x40
</pre>
</td><td>
<pre>
44 88 BB ? ? ? ? 48 8B 40
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x88\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D
</pre>
</td><td>
<pre>
40 88 AF ? ? ? ? 48 8B 0D
</pre>
</td></tr></table>

### CCSPlayerController::m_iCompetitiveRankingCleanupPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xC7\x83\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x0F\x1F\x80
</pre>
</td><td>
<pre>
C7 83 ? ? ? ? ? ? ? ? 85 D2 0F 84 ? ? ? ? E9 ? ? ? ? 0F 1F 80
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\xAF\x2A\x2A\x2A\x2A\x44\x39\xAF\x2A\x2A\x2A\x2A\x74\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\x41\xB8\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x44\x89\xAF\x2A\x2A\x2A\x2A\x48\x83\xC4
</pre>
</td><td>
<pre>
44 89 AF ? ? ? ? 44 39 AF ? ? ? ? 74 ? BA ? ? ? ? 48 8D 8F ? ? ? ? 41 B8 ? ? ? ? E8 ? ? ? ? 44 89 AF ? ? ? ? 48 83 C4
</pre>
</td></tr></table>

### CCSPlayerController::m_iCompetitiveRankingPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x44\x89\xBB\x2A\x2A\x2A\x2A\x48\x8B\x40\x2A\x4A\x8B\x44\xF0\x2A\x44\x8B\x78\x2A\x44\x39\xBB\x2A\x2A\x2A\x2A\x0F\x84
</pre>
</td><td>
<pre>
44 89 BB ? ? ? ? 48 8B 40 ? 4A 8B 44 F0 ? 44 8B 78 ? 44 39 BB ? ? ? ? 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x89\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8B\x44\xD9\x2A\x8B\x68\x2A\x39\xAF\x2A\x2A\x2A\x2A\x74\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\x41\xB8\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x89\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8B\x44\xD9\x2A\x0F\xB6\x68
</pre>
</td><td>
<pre>
89 AF ? ? ? ? 48 8B 0D ? ? ? ? 48 8B 44 D9 ? 8B 68 ? 39 AF ? ? ? ? 74 ? BA ? ? ? ? 48 8D 8F ? ? ? ? 41 B8 ? ? ? ? E8 ? ? ? ? 89 AF ? ? ? ? 48 8B 0D ? ? ? ? 48 8B 44 D9 ? 0F B6 68
</pre>
</td></tr></table>

