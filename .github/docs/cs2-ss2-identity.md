# cs2-ss2-identity

Last updated: July 9, 2026 at 6:26:44 AM GMT

* Manifests: [2410782554857596728](https://steamdb.info/depot/2347773/history/?changeid=M:2410782554857596728), [2853479544375896262](https://steamdb.info/depot/2347771/history/?changeid=M:2853479544375896262), [3030058169296419362](https://steamdb.info/depot/2347770/history/?changeid=M:3030058169296419362)
* Repository: https://github.com/ianlucas/cs2-ss2-identity
* Gamedata: https://github.com/ianlucas/cs2-ss2-identity/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSPlayerController::m_iCompetitiveRankType1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x88\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D</pre></td><td><pre>40 88 AF ? ? ? ? 48 8B 0D</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x44\x88\xBB\x2A\x2A\x2A\x2A\x48\x8B\x40</pre></td><td><pre>44 88 BB ? ? ? ? 48 8B 40</pre></td></tr>
</table>

### CCSPlayerController::m_iCompetitiveRanking1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x44\x89\xBB\x2A\x2A\x2A\x2A\x48\x8B\x40\x2A\x4A\x8B\x44\xF0\x2A\x44\x8B\x78\x2A\x44\x39\xBB\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x31\xC0</pre></td><td><pre>44 89 BB ? ? ? ? 48 8B 40 ? 4A 8B 44 F0 ? 44 8B 78 ? 44 39 BB ? ? ? ? 0F 84 ? ? ? ? 31 C0</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x89\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8B\x44\xD9\x2A\x8B\x68\x2A\x39\xAF\x2A\x2A\x2A\x2A\x74\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\x41\xB8\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x89\xAF\x2A\x2A\x2A\x2A\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8B\x44\xD9\x2A\x0F\xB6\x68</pre></td><td><pre>89 AF ? ? ? ? 48 8B 0D ? ? ? ? 48 8B 44 D9 ? 8B 68 ? 39 AF ? ? ? ? 74 ? BA ? ? ? ? 48 8D 8F ? ? ? ? 41 B8 ? ? ? ? E8 ? ? ? ? 89 AF ? ? ? ? 48 8B 0D ? ? ? ? 48 8B 44 D9 ? 0F B6 68</pre></td></tr>
</table>

### CCSPlayerController::m_iCompetitiveRanking2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\xC7\x83\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x66\x2E\x0F\x1F\x84\x00</pre></td><td><pre>C7 83 ? ? ? ? ? ? ? ? 85 D2 0F 84 ? ? ? ? E9 ? ? ? ? 66 2E 0F 1F 84 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x89\xAF\x2A\x2A\x2A\x2A\x44\x39\xAF\x2A\x2A\x2A\x2A\x74\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\x41\xB8\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x44\x89\xAF\x2A\x2A\x2A\x2A\x48\x83\xC4</pre></td><td><pre>44 89 AF ? ? ? ? 44 39 AF ? ? ? ? 74 ? BA ? ? ? ? 48 8D 8F ? ? ? ? 41 B8 ? ? ? ? E8 ? ? ? ? 44 89 AF ? ? ? ? 48 83 C4</pre></td></tr>
</table>

### CCSPlayerController::m_iszPlayerName1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\x48\x85\xD2\x74\x2A\x48\x89\x5C\x24</pre></td><td><pre>48 83 EC ? 48 85 D2 74 ? 48 89 5C 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\xBA</pre></td><td><pre>48 85 F6 0F 84 ? ? ? ? 55 BA</pre></td></tr>
</table>

### CCSPlayerController::m_iszPlayerName2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xCC</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 89 D5 41 54 49 89 CC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x49\x8B\xD9\x41\x0F\xB6\xE8</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 49 8B D9 41 0F B6 E8</pre></td></tr>
</table>

### CCSPlayerController::m_iszPlayerName3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x8D\x2D</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 4C 8D 2D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x56\x57\x41\x56\x48\x83\xEC\x2A\x48\x8B\xF2\x48\x8B\xF9\xE8</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 56 57 41 56 48 83 EC ? 48 8B F2 48 8B F9 E8</pre></td></tr>
</table>

### CCSPlayerController::m_iszPlayerName4

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x53\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x68\x2A\x48\x8D\x50</pre></td><td><pre>48 8B C4 53 56 48 81 EC ? ? ? ? 48 89 68 ? 48 8D 50</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x83\xF8</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC ? ? ? ? E8 ? ? ? ? 83 F8</pre></td></tr>
</table>
